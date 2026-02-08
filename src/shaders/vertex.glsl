uniform float uTime;
uniform float uPixelSize;

varying vec2 vUv;
varying float vIntersection;

float PI = 3.141592653589793;

float uJitterLevel = 200.0;

void main() {

  vec3 pos = position;

  // pos = floor(pos * grid + 0.5) / grid;
  vec4 modelPosition = modelMatrix * vec4(vec3(pos), 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;

  vec4 projectionPosition = projectionMatrix * viewPosition;

  gl_Position = projectionPosition;
  gl_Position.xy /= gl_Position.w;
  gl_Position.xy = floor(gl_Position.xy * uPixelSize) / uPixelSize * gl_Position.w;

  vUv = uv;

}
