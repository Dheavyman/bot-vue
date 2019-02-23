export default function (element, binding) {
  Object.keys(binding.value).forEach((value) => {
    element.style[value] = binding.value[value];
  });
  element.style.position = 'absolute';
}
