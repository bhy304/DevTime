import Dialog from '@/shared/ui/Dialog/Dialog';
import Button from '@/shared/ui/Button';

const Home = () => {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center">
      Home
      <Dialog>
        <Dialog.Trigger>Open Dialog</Dialog.Trigger>
        <Dialog.Content>
          <Dialog.Title>Dialog Title</Dialog.Title>
          <Dialog.Description>Dialog Description</Dialog.Description>
          <Dialog.Footer>
            <Button priority="secondary">Cancel</Button>
            <Button priority="primary">Submit</Button>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog>
    </main>
  );
};

export default Home;
