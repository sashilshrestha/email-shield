import { useEffect, useState } from 'react';
import { ResponsivePie } from '@nivo/pie';

export default function DashboardStats() {
  const [stats, setStats] = useState([
    {
      title: 'Emails Scanned',
      value: '---',
      description: 'Last 30 days',
      change: '+12.5%',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-blue-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      title: 'Threats Detected',
      value: '---',
      description: 'Last 30 days',
      change: '-4.3%',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-red-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      title: 'Clean Emails',
      value: '---',
      description: 'Last 30 days',
      change: '+14.2%',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-green-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ]);

  const [chart, setChart] = useState([]);

  const fetchUserScans = async () => {
    try {
      const { access_token } = JSON.parse(localStorage.getItem('emailShield'));

      console.log(access_token);

      const response = await fetch('http://localhost:8000/user-scans', {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      if (!response.ok) throw new Error('Failed to fetch scan data');

      const data = await response.json();
      console.log(data.details);

      setStats((prevStats) =>
        prevStats.map((stat) => {
          if (stat.title === 'Emails Scanned') {
            return { ...stat, value: data.details.total_scans.toString() };
          } else if (stat.title === 'Threats Detected') {
            return { ...stat, value: data.details.malware_results.toString() };
          } else if (stat.title === 'Clean Emails') {
            return { ...stat, value: data.details.clean_results.toString() };
          }
          return stat;
        })
      );

      // setChart([
      //   {
      //     id: 'go',
      //     label: 'go',
      //     value: 340,
      //     color: 'hsl(40, 70%, 50%)',
      //   },
      //   {
      //     id: 'php',
      //     label: 'php',
      //     value: 458,
      //     color: 'hsl(279, 70%, 50%)',
      //   },
      //   {
      //     id: 'css',
      //     label: 'css',
      //     value: 374,
      //     color: 'hsl(313, 70%, 50%)',
      //   },
      //   {
      //     id: 'javascript',
      //     label: 'javascript',
      //     value: 577,
      //     color: 'hsl(277, 70%, 50%)',
      //   },
      //   {
      //     id: 'sass',
      //     label: 'sass',
      //     value: 471,
      //     color: 'hsl(32, 70%, 50%)',
      //   },
      // ]);
      setChart(data.details.distribution);
    } catch (error) {
      console.error('Error fetching scans:', error);
    }
  };

  useEffect(() => {
    fetchUserScans();
  }, []);

  return (
    <div className="p-6 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold md:text-3xl">Dashboard</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 transition-all hover:shadow-md"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {stat.title}
              </h3>
              {stat.icon}
            </div>
            <div className="text-2xl font-bold">{stat.value}</div>
          </div>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h3 className="font-medium">Threat Distribution</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Types of threats detected
            </p>
          </div>
          <div className='h-[20rem]'>
            <ResponsivePie /* or Pie for fixed dimensions */
              data={chart}
              margin={{ top: 30, right: 80, bottom: 80, left: 80 }}
              innerRadius={0.5}
              padAngle={0.6}
              cornerRadius={2}
              activeOuterRadiusOffset={8}
              arcLinkLabelsSkipAngle={10}
              arcLinkLabelsTextColor="#333333"
              arcLinkLabelsThickness={2}
              arcLinkLabelsColor={{ from: 'color' }}
              arcLabelsSkipAngle={10}
              arcLabelsTextColor={{
                from: 'color',
                modifiers: [['darker', 2]],
              }}
              legends={[
                {
                  anchor: 'bottom',
                  direction: 'row',
                  translateY: 56,
                  itemWidth: 100,
                  itemHeight: 18,
                  symbolShape: 'circle',
                },
              ]}
            />
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h3 className="font-medium">Recent Activity</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Latest scan results
            </p>
          </div>
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="flex items-center gap-4 p-4">
                <div
                  className={`h-2 w-2 rounded-full ${
                    item % 3 === 0 ? 'bg-red-500' : 'bg-green-500'
                  }`}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">
                    {item % 3 === 0 ? 'Malware detected' : 'Clean email'}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                    {new Date(Date.now() - item * 3600000).toLocaleString()}
                  </p>
                </div>
                <div
                  className={`text-xs font-medium px-2 py-1 rounded-full ${
                    item % 3 === 0
                      ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
                      : 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                  }`}
                >
                  {item % 3 === 0 ? 'High risk' : 'Safe'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
