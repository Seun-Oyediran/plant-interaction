uniform float uTime;
uniform float uPixelSize;
uniform vec2 uResolution;

varying vec2 vUv;
varying float vIntersection;

float PI = 3.141592653589793;

float uJitterLevel = 200.0;

void main() {

  vec4 clip = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

  // 1. Clip → NDC
  vec2 ndc = clip.xy / clip.w;

  // 2. NDC → screen pixels
  vec2 screen = (ndc * 0.5 + 0.5) * uResolution;

  // 3. SNAP to pixel grid
  screen = floor(screen / uPixelSize) * uPixelSize;

  // 4. Screen → NDC
  ndc = (screen / uResolution) * 2.0 - 1.0;

  // 5. NDC → clip
  clip.xy = ndc * clip.w;

  gl_Position = clip;
  vUv = uv;

}

// void main() {

//   vec3 pos = position;

//   // pos = floor(pos * grid + 0.5) / grid;
//   vec4 modelPosition = modelMatrix * vec4(vec3(pos), 1.0);
//   vec4 viewPosition = viewMatrix * modelPosition;

//   vec4 projectionPosition = projectionMatrix * viewPosition;

//   gl_Position = projectionPosition;
//   gl_Position.xy /= gl_Position.w;
//   gl_Position.xy = floor(gl_Position.xy * uPixelSize) / uPixelSize * gl_Position.w;

//   vUv = uv;

// }
