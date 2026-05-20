
interface GenralLineDecoProps {
  /** Chiều cao tính bằng px — được đo từ div cha bằng ResizeObserver.
   *  Nếu chưa đo được (0) thì dùng fallback 100vh. */
  height?: number;
}

const GenralLineDeco = ({ height }: GenralLineDecoProps) => {
  return (
    <span
      className="absolute z-10 top-0 border-l border-brand-orange left-6 lg:left-60"
      style={{ height: height ? `${height}px` : "100vh" }}
    />
  );
};

export default GenralLineDeco;
