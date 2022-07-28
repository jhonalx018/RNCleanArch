import {useEffect} from 'react';
import {useDispatch} from 'react-redux';

export default function useDispatcher<T>(
  type: string,
  defaultPayload: T,
): (payload: T) => void {
  const dispatch = useDispatch();

  const dispatcher = (actionType: string, payload: T) =>
    dispatch({type: actionType, payload});

  useEffect(() => {
    dispatcher(type, defaultPayload);

    return () => {
      dispatcher(`${type}_CANCEL`, defaultPayload);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (payload: T) => {
    return dispatcher(type, payload);
  };
}
