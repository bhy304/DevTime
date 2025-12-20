import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFieldArray, useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Start from "@/shared/assets/start.svg?react";
import Pause from "@/shared/assets/pause.svg?react";
import Finish from "@/shared/assets/finish.svg?react";
import { Dialog, Button, TextField } from "@/shared/ui";
import { timerSchema, type TimerSchema } from "@/entities/timer/model/timer.schema";
import TodoItem from "@/entities/task/ui/TodoItem";

const TimerControls = ({ isAuthenticated }: { isAuthenticated: boolean }) => {
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

  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [todayGoalDialogOpen, setTodayGoalDialogOpen] = useState(false);
  const [task, setTask] = useState("");

  const handleClick = () => {
    if (!isAuthenticated) {
      setOpen(true);
      return;
    }
    setTodayGoalDialogOpen(true);
  };

  const handleAddTask = () => {
    if (task.trim().length === 0) return;
    append({ task: task });
    setTask("");
  };

  return (
    <section className="flex items-center gap-20">
      <Start
        width={120}
        height={120}
        className="hover:[&_path]:fill-primary hover:[&_path]:fill-opacity-100 cursor-pointer"
        onClick={handleClick}
      />
      <Pause
        width={120}
        height={120}
        className="hover:[&_path]:fill-primary hover:[&_path]:fill-opacity-100 cursor-pointer"
      />
      <Finish
        width={120}
        height={120}
        className="hover:[&_path]:fill-primary hover:[&_path]:fill-opacity-100 cursor-pointer"
      />
      <Dialog open={open}>
        <Dialog.Content>
          <Dialog.Title>로그인이 필요합니다.</Dialog.Title>
          <Dialog.Description>DevTime을 사용하려면 로그인이 필요합니다. 로그인 페이지로 이동할까요?</Dialog.Description>
          <Dialog.Footer>
            <Button priority="tertiary" onClick={() => setOpen(false)}>
              취소
            </Button>
            <Button
              onClick={() => {
                setOpen(false);
                navigate("/login");
              }}
            >
              로그인하기
            </Button>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog>

      <Dialog open={todayGoalDialogOpen}>
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
              <TextField.Button priority="tertiary" onClick={handleAddTask} disabled={!task.trim()}>
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
            <Button
              priority="tertiary"
              onClick={() => {
                setTodayGoalDialogOpen(false);
                remove();
                reset();
              }}
            >
              취소
            </Button>
            <Button
              priority="tertiary"
              disabled={!todayGoal?.trim() || !fields.length}
              onClick={() => {
                setTodayGoalDialogOpen(false);
                remove();
                reset();
              }}
            >
              타이머 시작하기
            </Button>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog>
    </section>
  );
};

export default TimerControls;
