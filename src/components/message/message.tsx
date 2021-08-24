type messageProps = {
  message: string;
};

export const Message = ({ message }: messageProps): React.ReactElement => {
  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};
