'use client';
import { useEffect, useState } from 'react';
import styles from '@/components/styles/Response.module.css';
import { EvervaultCard, Icon } from './ui/glowing-stars';
import { Button } from './ui/moving-border';

interface Response {
  _id: string;
  name: string;
  email: string;
  message: string;
}

const Responses = () => {
  const [responses, setResponses] = useState<Response[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchResponses = async () => {
      try {
        const res = await fetch('/api/get-message');
        const data = await res.json();

        if (res.ok) {
          setResponses(data.data);
        } else {
          setError(data.message || 'Failed to fetch responses');
        }
      } catch (error) {
        setError('Failed to fetch responses');
      } finally {
        setLoading(false);
      }
    };

    fetchResponses();
  }, []);

  return (
    <div className="py-40 mb-[20rem]">
      <h1 className="heading">Responses</h1>
      {loading ? (
        <div className="flex items-center justify-center py-10">
          <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800">
            Loading...
          </Button>
        </div>
      ) : error ? (
        <p className={styles.error}>{error}</p>
      ) : responses.length > 0 ? (
        <div className="h-[40rem] flex flex-wrap items-center justify-center md-w-[40rem] p-4 gap-20 mt-10">
          {responses.map((response) => (
            <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
              <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
              <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
              <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
              <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

              <EvervaultCard text={response.name} />

              <h2 className="dark:text-white text-black mt-4 text-sm font-light">
                {response.message}
              </h2>
              <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
                {response.email}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p>No responses found</p>
      )}
    </div>
  );
};

export default Responses;
