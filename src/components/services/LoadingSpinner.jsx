import { Loading } from "@nextui-org/react";

function LoadingSpinner() {
  return (
    <Loading
      type="points"
      textColor='primary'
      color="primary"
      css={{
        position: 'initial',
        right: '$36'
      }}
      >
        Loading
      </Loading>
  );
}

export { LoadingSpinner }
