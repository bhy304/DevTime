import Start from "@/shared/assets/start.svg?react";
import Pause from "@/shared/assets/pause.svg?react";
import Finish from "@/shared/assets/finish.svg?react";
import Dialog from "@/shared/ui/Dialog/Dialog";
import Button from "@/shared/ui/Button/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@/shared/ui/TextField/TextField";
import TodoItem from "./TodoItem";
import type { Task } from "@/entities/task/model/task.model";

const tasks: Task[] = [
  {
    content: "코딩테스트 문제 1개 풀어보기",
    isCompleted: false,
  },
  {
    content: "온라인 강의 Chapter 3 듣기",
    isCompleted: false,
  },
  {
    content: "프로젝트 코드 리팩토링하기",
    isCompleted: false,
  },
  {
    content: "프로젝트 코드 리팩토링하기",
    isCompleted: false,
  },
  {
    content: "기술 면접 빈출 문항 답변 정리하기",
    isCompleted: false,
  },
  {
    content: "기술 블로그 작성하기",
    isCompleted: false,
  },
  {
    content: "오늘 공부한 내용 TIL 작성하기",
    isCompleted: false,
  },
];

const TimerControls = ({ isAuthenticated }: { isAuthenticated: boolean }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [todayGoalDialogOpen, setTodayGoalDialogOpen] = useState(false);

  const handleClick = () => {
    if (!isAuthenticated) {
      setOpen(true);
      return;
    }
    // 타이머 시작
    setTodayGoalDialogOpen(true);
  };

  return (
    <section className="flex items-center gap-20">
      <Start
        width={120}
        height={120}
        className="hover:[&_path]:fill-primary hover:fill-path-opacity-1 cursor-pointer"
        onClick={handleClick}
      />
      <Pause width={120} height={120} className="hover:[&_path]:fill-primary hover:fill-opacity-1 cursor-pointer" />
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
              <TextField.Fieldset>
                <TextField.Input type="text" />
              </TextField.Fieldset>
            </TextField>
          </Dialog.Title>

          <TextField id="todo" placeholder="할 일을 추가해 주세요.">
            <TextField.Fieldset>
              <TextField.Label>할 일 목록</TextField.Label>
              <div className="flex items-center">
                <TextField.Input type="text" />
                <TextField.Button priority="tertiary" onClick={() => {}} disabled={true}>
                  추가
                </TextField.Button>
              </div>
            </TextField.Fieldset>
          </TextField>
          <div className="no-scrollbar scrollbar-hide wrap-break-words my-9 h-[568px] min-w-[460px] overflow-auto leading-relaxed whitespace-pre-wrap [&::-webkit-scrollbar]:hidden">
            <ul className="flex flex-col gap-3">
              {tasks.map((task) => (
                <TodoItem key={task.content} defaultValue={task.content} task={task} />
              ))}
            </ul>
          </div>
          <Dialog.Footer>
            <Button priority="tertiary" onClick={() => setTodayGoalDialogOpen(false)}>
              취소
            </Button>
            <Button
              priority="tertiary"
              disabled={true}
              onClick={() => {
                setTodayGoalDialogOpen(false);
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
