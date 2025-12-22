import { useNavigate } from "react-router-dom";
import { Button, Dialog } from "@/shared/ui";

interface LoginRequiredDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const LoginRequiredDialog = ({ open, setOpen }: LoginRequiredDialogProps) => {
  const navigate = useNavigate();

  return (
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
  );
};

export default LoginRequiredDialog;
