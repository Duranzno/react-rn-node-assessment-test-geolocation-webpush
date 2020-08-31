import { SosafeData } from '@sosafe-test/common';

export const submitFormData = async (
  data: SosafeData,
): Promise<Response> => {
  try {
    const response = await fetch(
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      `${process.env.REACT_APP_SERVER_API!}/upload`,
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(data),
      },
    );
    return response;
  } catch (error) {
    return error;
  }
};
