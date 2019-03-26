
export async function loadBookQuestions() {
  return fetch(
    'https://opentdb.com/api.php?amount=10&category=10', {
      method: 'GET'
    }
  );
}

export async function loadMathQuestions() {
  return fetch(
    'https://opentdb.com/api.php?amount=10&category=19', {
      method: 'GET'
    }
  );
}


export async function loadAnimeMangaQuestions() {
  return fetch(
    'https://opentdb.com/api.php?amount=10&category=31', {
      method: 'GET'
    }
  );
}

