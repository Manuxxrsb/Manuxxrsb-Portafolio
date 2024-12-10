import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function MyComponent() {
  return (
    <Parallax pages={1} style={{ top: "0", left: "0" }}>
      <ParallaxLayer offset={0} speed={2.5}>
        <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
      </ParallaxLayer>
    </Parallax>
  );
}

export default MyComponent;
