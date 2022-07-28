import {Subject, takeUntil} from 'rxjs';
import {debounceTime} from 'rxjs/operators';
import {useMemo, useEffect, useRef} from 'react';

/**
 * Excuted a method
 * @param  {(params:T)=>any} next
 * @param  {number=500} delay
 */
export default function <T>(next: (params: T) => any, delay: number = 500) {
  // We can use useMemo and use effect to avoid memory leak, but the use of useMemo is not recommended for this case because
  // useMemo will be called every time the function is called, which will cause the function to be called every time the dependencies change.
  const iperativeSubscripion$ = useMemo(() => new Subject<boolean>(), []);
  // Why are we not setting the subject value in this declaration? Because after each render the subject will be restarted.
  const subscribeMethod$ = useMemo(() => new Subject<T>(), []); //useRef<Subject<T>>();

  useEffect(() => {
    subscribeMethod$
      .pipe(debounceTime(delay), takeUntil(iperativeSubscripion$))
      .subscribe({next});

    return () => {
      iperativeSubscripion$.next(true);
      iperativeSubscripion$.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return function (arg: T) {
    subscribeMethod$.next(arg);
  };
}
