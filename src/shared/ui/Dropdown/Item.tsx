const Item = ({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) => {
  return (
    <div role="menuitem" tabIndex={0} onClick={onClick}>
      {children}
    </div>
  );
};

export default Item;
