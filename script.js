const pickButton = document.getElementById('pickButton');
const result = document.getElementById('result');

pickButton.addEventListener('click', () => {
  const numbers = Array.from({ length: 25 }, (_, i) => i + 1);

  // Fisher-Yates Shuffle
  for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
  }

  const selected = numbers.slice(0, 4).sort((a, b) => a - b);
  const selectedText = selected.join(', ');

  result.textContent = `청소당번 번호: ${selectedText}`;
  result.classList.remove('hidden');

  Swal.fire({
    title: '🎉 오늘의 청소당번!',
    html: `<strong style="font-size: 24px;">${selectedText}</strong>`,
    icon: 'success',
    confirmButtonText: '확인',
    background: '#f0f4ff',
    color: '#333',
    confirmButtonColor: '#6366f1',
  });
});
