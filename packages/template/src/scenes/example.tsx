import { makeScene2D, Img } from '@motion-canvas/2d';
import { createRef } from '@motion-canvas/core';
import { all } from '@motion-canvas/core/lib/flow';

export default makeScene2D(function* (view) {
  const ufo = createRef<Img>();
  const cow = createRef<Img>();

  view.add(
    <>
      <Img
        ref={ufo}
        src="https://cdn-icons-png.flaticon.com/512/3306/3306571.png"
        position={[-500, -500]}
        size={400}
      />
      <Img
        ref={cow}
        src="https://static.vecteezy.com/system/resources/previews/011/213/347/non_2x/cartoon-cute-cow-free-png.png"
        position={[0, 500]}
        size={100}
      />
    </>
  );

  yield* all(
    ufo().position([0, 0], 1),
    ufo().scale(0.5, 1)
  );

  yield* all(
    cow().position([0, 0], 1),
    cow().opacity(0, 1)
  );

  yield* all(
    ufo().position([500, -500], 1),
    ufo().scale(0, 1)
  );
});