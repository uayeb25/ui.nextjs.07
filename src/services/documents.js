// services/api.js
export async function fetchDocumentCards() {
    const res = await fetch('http://localhost:8000/documents');
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await res.json();
    return data;
  }