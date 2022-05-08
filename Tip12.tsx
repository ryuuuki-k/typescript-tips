type IconSize = 'sm' | 'md' | Omit<string, 'sm' | 'md'>; // Omitでstringから特定の値を除外すると補完が効く

interface Props {
  size: IconSize;
}

const Child = (props: Props) => {
  return <></>;
};

const Tip12 = () => {
  return (
    <>
      <Child size="md" /> {/* 補完が有効 */}
      <Child size="sm" /> {/* 補完が有効 */}
    </>
  );
};

export default Tip12;
