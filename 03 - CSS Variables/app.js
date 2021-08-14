const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    console.log(suffix);
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('input', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
