import { useState, useRef, useEffect } from "react";
import { cva } from "class-variance-authority";
import cn from "@/shared/lib/cn";
import TextField from "@/shared/ui/TextField/TextField";
import Button from "@/shared/ui/Button/Button";
import SymbolSmall from "@/shared/assets/symbol-small.svg?react";
import Edit from "@/shared/assets/edit.svg?react";
import Trash from "@/shared/assets/trash.svg?react";
import Check from "@/shared/assets/check.svg?react";

const todoItemVariants = cva("bg-primary flex items-center  rounded-lg p-6 gap-4");

interface TodoItemProps {
  task: string;
  index: number;
  onUpdate: (index: number, value: string) => void;
  onDelete: (index: number) => void;
}

const TodoItem = ({ task, index, onUpdate, onDelete }: TodoItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempTask, setTempTask] = useState(task);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing) {
      inputRef.current?.focus();
    }
  }, [isEditing]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempTask(e.target.value);
  };

  const handleSave = () => {
    onUpdate(index, tempTask);
    setIsEditing(false);
  };

  return (
    <li className={cn(todoItemVariants())}>
      <SymbolSmall width={42} height={20} />
      <div className="flex-1">
        <TextField className="m-0 flex-row justify-between gap-4">
          <TextField.Input
            ref={inputRef}
            type="text"
            value={isEditing ? tempTask : task}
            disabled={!isEditing}
            onChange={handleChange}
            className="text-body min-w-fit flex-1 bg-transparent p-0 font-semibold text-white"
          />
          <div className="flex gap-4">
            {isEditing ? (
              <Button onClick={handleSave}>
                <Check width={24} height={24} />
              </Button>
            ) : (
              <>
                <Button onClick={() => setIsEditing(true)}>
                  <Edit width={24} height={24} />
                </Button>
                <Button onClick={() => onDelete(index)}>
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
