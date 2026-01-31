// precision mediump float;
uniform float uTime;
uniform sampler2D uTexture;
uniform vec2 uResolution;

varying vec2 vUv;

vec2 CoverUV(vec2 u, vec2 s, vec2 i) {
  float rs = s.x / s.y; // Aspect screen size
  float ri = i.x / i.y; // Aspect image size
  vec2 st = rs < ri ? vec2(i.x * s.y / i.y, s.y) : vec2(s.x, i.y * s.x / i.x); // New st
  vec2 o = (rs < ri ? vec2((st.x - s.x) / 2.0, 0.0) : vec2(0.0, (st.y - s.y) / 2.0)) / st; // Offset
  return u * s / st + o;
}

float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

// vec3 randomFactors = vec3(2.0);

// vec3 randomFactors = vec3(1.0);

void main() {

// vec2 uv = floor(vUv * resolution.xy) / resolution.xy;

  // vec2 gridUv = vec2(floor(vUv.x * (randomFactors.x * 10.0)) / (randomFactors.x * 10.0), floor(vUv.y * (randomFactors.y * 10.0)) / (randomFactors.y * 10.0));
  // vec4 texColor = texture2D(uTexture, gridUv);
  // float strength = random(gridUv * 1.0 * 1.0);
  // vec3 noiseColor = vec3(strength);

  vec4 tex = texture2D(uTexture, vUv);

  // vec3 finalColor = mix(texColor.rgb, noiseColor, 0.05);
  // gl_FragColor = vec4(vUv, 1.0, 1.0);

  gl_FragColor = vec4(tex.rgb, 1.0);

      #include <tonemapping_fragment>
	#include <colorspace_fragment>
}
