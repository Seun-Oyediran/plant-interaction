uniform float uTime;
uniform float uPixelSize;

varying vec2 vUv;
varying float vIntersection;

float PI = 3.141592653589793;

void main() {

  vec3 pos = position;

  float grid = uPixelSize;
  pos = floor(pos * grid + 0.5) / grid;
  vec4 modelPosition = modelMatrix * vec4(vec3(pos), 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;

  vec4 projectionPosition = projectionMatrix * viewPosition;

  gl_Position = projectionPosition;

  vUv = uv;

}
