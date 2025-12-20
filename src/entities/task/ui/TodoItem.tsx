import { useState } from "react";
import { cva } from "class-variance-authority";
import cn from "@/shared/lib/cn";
import TextField from "@/shared/ui/TextField/TextField";
import Button from "@/shared/ui/Button/Button";
import type { Task } from "@/entities/task/model/task.model";
import SymbolSmall from "@/shared/assets/symbol-small.svg?react";
import Edit from "@/shared/assets/edit.svg?react";
import Trash from "@/shared/assets/trash.svg?react";
import Check from "@/shared/assets/check.svg?react";

const todoItemVariants = cva("bg-primary flex items-center  rounded-lg p-6 gap-4");

const TodoItem = ({ defaultValue, task }: { defaultValue: string; task: Task }) => {
  const [value, setValue] = useState(defaultValue);
  const [disabled, setDisabled] = useState(true);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <li className={cn(todoItemVariants())}>
      <SymbolSmall width={42} height={20} />
      <div className="flex-1">
        <TextField className="m-0 flex-row justify-between gap-4">
          <TextField.Input
            type="text"
            value={value}
            disabled={disabled}
            onChange={onChange}
            className="text-body min-w-fit flex-1 bg-transparent p-0 font-semibold text-white"
          />
          <div className="flex gap-4">
            {task.isCompleted ? (
              <Button>
                <Check width={24} height={24} />
              </Button>
            ) : (
              <>
                <Button
                  onClick={() => {
                    // TODO: 수정
                    setDisabled(false);
                  }}
                >
                  <Edit width={24} height={24} />
                </Button>
                <Button
                  onClick={() => {
                    // TODO: 삭제
                  }}
                >
                  <Trash width={24} height={24} />
                </Button>
              </>
            )}
          </div>
        </TextField>
      </div>
    </li>
  );
};

export default TodoItem;
