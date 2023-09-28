export const voteForProject = async (projectId, userId) => {
  try {
    const response = await fetch(
      `${process.env.API}/projects/${projectId}/vote`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({})
      }
    );

    // Check for non-OK response statuses (like 400, 500, etc.)
    if (!response.ok) {
      // Try to get a detailed error message from the API response,
      // if not available, use the status text.
      const errorData = await response.json().catch(() => ({}));
      const errorMessage = errorData.error || response.statusText;
      throw new Error(errorMessage);
    }

    // If response is OK, you can parse the result if needed
    // const data = await response.json();

    // Return data or just confirm success (depends on your API and needs)
    // return data;

  } catch (err) {
    console.error('Error while voting for project:', err.message);
    throw err; // Re-throw the error if you want to handle it upstream or show it to the user
  }
};
