
export async function loadTriviaQuestions() {
  return fetch(
    'https://opentdb.com/api.php?amount=10&type=multiple', {
      method: 'GET'
    }
  );
}
