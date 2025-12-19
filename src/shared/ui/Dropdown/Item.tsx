const Item = ({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) => {
  return <div onClick={onClick}>{children}</div>;
};

export default Item;
