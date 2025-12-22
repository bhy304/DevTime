import { useState } from "react";
import { useFieldArray, useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { timerSchema, type TimerSchema } from "@/entities/timer/model/timer.schema";
import { Button, Dialog, TextField } from "@/shared/ui";
import TodoItem from "@/entities/task/ui/TodoItem";

interface TimerGoalDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const TimerGoalDialog = ({ open, setOpen }: TimerGoalDialogProps) => {
  const [task, setTask] = useState("");

  const { register, control, reset } = useForm<TimerSchema>({
    resolver: zodResolver(timerSchema),
    mode: "onChange",
    defaultValues: {
      todayGoal: "",
      tasks: [],
    },
  });

  const { fields, append, remove, update } = useFieldArray({
    control,
    name: "tasks",
  });

  const todayGoal = useWatch({
    control,
    name: "todayGoal",
  });

  const handleAddTask = () => {
    if (task.trim().length === 0) return;
    append({ task: task });
    setTask("");
  };

  const handleClick = () => {
    setOpen(false);
    remove();
    reset();
  };

  return (
    <Dialog open={open}>
      <Dialog.Content className="min-w-[640px]">
        <Dialog.Title className="mb-9 text-4xl font-bold">
          <TextField id="title" placeholder="오늘의 목표">
            <TextField.Input type="text" {...register("todayGoal")} className="text-indigo" />
          </TextField>
        </Dialog.Title>
        <TextField id="todo" placeholder="할 일을 추가해 주세요.">
          <TextField.Label>할 일 목록</TextField.Label>
          <div className="flex items-center">
            <TextField.Input
              type="text"
              value={task}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTask(e.target.value)}
            />
            <TextField.Button priority="tertiary" disabled={!task.trim()} onClick={handleAddTask}>
              추가
            </TextField.Button>
          </div>
        </TextField>
        <div className="no-scrollbar scrollbar-hide wrap-break-words my-9 h-[568px] min-w-[460px] overflow-auto leading-relaxed whitespace-pre-wrap [&::-webkit-scrollbar]:hidden">
          <ul className="flex flex-col gap-3">
            {fields.map((field, index) => (
              <TodoItem
                key={field.id}
                index={index}
                task={field.task}
                onUpdate={(index, value) => update(index, { task: value })}
                onDelete={(index) => remove(index)}
              />
            ))}
          </ul>
        </div>
        <Dialog.Footer>
          <Button priority="tertiary" onClick={handleClick}>
            취소
          </Button>
          <Button priority="tertiary" disabled={!todayGoal?.trim() || !fields.length} onClick={handleClick}>
            타이머 시작하기
          </Button>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog>
  );
};

export default TimerGoalDialog;
