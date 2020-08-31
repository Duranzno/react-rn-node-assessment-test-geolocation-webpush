import React from 'react';
import { Container } from 'components/Common/Container.component';
import { Form, Loader } from 'components';
import { getCandidates, submitFormData } from 'utils';
import { SosafeData } from '@sosafe-test/common';
import { AppProvider } from 'providers';

const App: React.FC = () => {
  const [candidates, setCandidates] = React.useState<string[]>([]);
  const candidatesURL = window.location.href + '/candidates.json';

  React.useEffect(() => {
    getCandidates(candidatesURL, setCandidates);
  }, []);

  const onSubmit = async (data: SosafeData): Promise<void> => {
    try {
      const ISOTime: string = new Date().toISOString();
      const payload = {
        ...data,
        ISOTime: ISOTime,
        name: `Test: ${new Date(ISOTime).toDateString()}`,
      };
      await submitFormData(payload);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <AppProvider>
      <div className="background flex w-full min-h-screen justify-center items-center">
        <Container>
          {candidates.length ? (
            <Form candidates={candidates} onSubmit={onSubmit} />
          ) : (
            <Loader />
          )}
        </Container>
      </div>
    </AppProvider>
  );
};

export default App;
