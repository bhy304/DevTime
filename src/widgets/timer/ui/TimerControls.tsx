import Start from "@/shared/assets/start.svg?react";
import Pause from "@/shared/assets/pause.svg?react";
import Finish from "@/shared/assets/finish.svg?react";
import Dialog from "@/shared/ui/Dialog/Dialog";
import Button from "@/shared/ui/Button/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TimerControls = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <section className="flex items-center gap-20">
      <Start
        width={120}
        height={120}
        className="hover:[&_path]:fill-primary hover:fill-path-opacity-1 cursor-pointer"
        onClick={handleOpen}
      />
      <Pause width={120} height={120} className="hover:[&_path]:fill-primary hover:fill-opacity-1 cursor-pointer" />
      <Finish
        width={120}
        height={120}
        className="hover:[&_path]:fill-primary hover:[&_path]:fill-opacity-100 cursor-pointer"
      />
      {/* <Dialog open={open}>
        <Dialog.Content>
          <Dialog.Title>로그인이 필요합니다.</Dialog.Title>
          <Dialog.Description>DevTime을 사용하려면 로그인이 필요합니다. 로그인 페이지로 이동할까요?</Dialog.Description>
          <Dialog.Footer>
            <Button priority="tertiary" onClick={() => setOpen(false)}>
              취소
            </Button>
            <Button
              onClick={() => {
                navigate("/login");
              }}
            >
              로그인하기
            </Button>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog> */}
    </section>
  );
};

export default TimerControls;
