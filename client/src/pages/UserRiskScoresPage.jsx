'use client';

import { useState } from 'react';
import {
  AlertTriangle,
  Download,
  FileUp,
  Filter,
  RefreshCw,
  Search,
  Send,
  Shield,
  User,
} from 'lucide-react';

export default function UserRiskScoresPage() {
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data for user risk scores
  const users = [
    {
      id: 1,
      username: 'john.doe',

      riskScore: 87,
      riskLevel: 'High',
    },
    {
      id: 2,
      username: 'sarah.smith',

      riskScore: 76,
      riskLevel: 'High',
    },
    {
      id: 3,
      username: 'mike.johnson',

      riskScore: 62,
      riskLevel: 'Medium',
    },
    {
      id: 4,
      username: 'lisa.wong',

      riskScore: 58,
      riskLevel: 'Medium',
    },
    {
      id: 5,
      username: 'david.miller',

      riskScore: 45,
      riskLevel: 'Medium',
    },
    {
      id: 6,
      username: 'robert.chen',

      riskScore: 32,
      riskLevel: 'Low',
    },
    {
      id: 7,
      username: 'emma.davis',

      riskScore: 28,
      riskLevel: 'Low',
    },
  ];

  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getRiskClass = (risk) => {
    switch (risk) {
      case 'High':
        return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300';
      case 'Medium':
        return 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300';
      case 'Low':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const getScoreColor = (score) => {
    if (score >= 75) return 'text-red-600 dark:text-red-400';
    if (score >= 50) return 'text-amber-600 dark:text-amber-400';
    return 'text-green-600 dark:text-green-400';
  };

  const getValueClass = (value) => {
    switch (value) {
      case 'Very High':
        return 'text-red-600 dark:text-red-400';
      case 'High':
        return 'text-red-500 dark:text-red-300';
      case 'Medium':
        return 'text-amber-500 dark:text-amber-300';
      case 'Low':
        return 'text-green-500 dark:text-green-300';
      case 'Very Low':
        return 'text-green-600 dark:text-green-400';
      default:
        return 'text-gray-500 dark:text-gray-400';
    }
  };

  // Calculate risk distribution
  const highRiskCount = users.filter(
    (user) => user.riskLevel === 'High'
  ).length;
  const mediumRiskCount = users.filter(
    (user) => user.riskLevel === 'Medium'
  ).length;
  const lowRiskCount = users.filter((user) => user.riskLevel === 'Low').length;
  const totalUsers = users.length;

  return (
    <div className="p-6 space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold md:text-3xl">User Risk Scores</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 transition-all hover:shadow-md">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
              <User className="h-5 w-5" />
            </div>
          </div>
          <div className="text-2xl font-bold">{totalUsers}</div>
          <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Total Users Monitored
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 transition-all hover:shadow-md">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 rounded-lg bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400">
              <AlertTriangle className="h-5 w-5" />
            </div>
            <div className="flex items-center text-xs font-medium text-red-600 dark:text-red-400">
              {Math.round((highRiskCount / totalUsers) * 100)}%
            </div>
          </div>
          <div className="text-2xl font-bold">{highRiskCount}</div>
          <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            High Risk Users
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 transition-all hover:shadow-md">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 rounded-lg bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400">
              <AlertTriangle className="h-5 w-5" />
            </div>
            <div className="flex items-center text-xs font-medium text-amber-600 dark:text-amber-400">
              {Math.round((mediumRiskCount / totalUsers) * 100)}%
            </div>
          </div>
          <div className="text-2xl font-bold">{mediumRiskCount}</div>
          <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Medium Risk Users
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 transition-all hover:shadow-md">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 rounded-lg bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
              <Shield className="h-5 w-5" />
            </div>
            <div className="flex items-center text-xs font-medium text-green-600 dark:text-green-400">
              {Math.round((lowRiskCount / totalUsers) * 100)}%
            </div>
          </div>
          <div className="text-2xl font-bold">{lowRiskCount}</div>
          <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Low Risk Users
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center">
            <User className="h-5 w-5 text-gray-400 dark:text-gray-500 mr-2" />
            <h2 className="text-lg font-medium">User Risk Assessment</h2>
            <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
              ({filteredUsers.length} users)
            </span>
          </div>
          <div className="relative max-w-xs w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md leading-5 bg-white dark:bg-gray-700 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:placeholder-gray-400 dark:focus:placeholder-gray-500 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700/50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                >
                  User
                </th>

                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                >
                  Risk Score
                </th>

                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                >
                  Risk Level
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {filteredUsers.length === 0 ? (
                <tr>
                  <td
                    colSpan="6"
                    className="px-6 py-4 text-center text-sm text-gray-500 dark:text-gray-400"
                  >
                    No users found
                  </td>
                </tr>
              ) : (
                filteredUsers.map((user) => (
                  <tr
                    key={user.id}
                    className="hover:bg-gray-50 dark:hover:bg-gray-700/30"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300">
                          {user.username.charAt(0).toUpperCase()}
                        </div>
                        <div className="ml-3">
                          <div className="text-sm font-medium">
                            {user.username}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div
                        className={`text-sm font-medium ${getScoreColor(
                          user.riskScore
                        )}`}
                      >
                        {user.riskScore}/100
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mt-1">
                        <div
                          className={`h-1.5 rounded-full ${
                            user.riskScore >= 75
                              ? 'bg-red-500'
                              : user.riskScore >= 50
                              ? 'bg-amber-500'
                              : 'bg-green-500'
                          }`}
                          style={{ width: `${user.riskScore}%` }}
                        ></div>
                      </div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getRiskClass(
                          user.riskLevel
                        )}`}
                      >
                        {user.riskLevel}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      <button
                        className="flex items-center px-3 py-2 gap-1  tracking-tight font-medium rounded-md transition-colors cursor-pointer group hover:bg-blue-50 hover:text-blue-400 "
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      >
                        <div>Send Report</div>
                        <FileUp
                          size={16}
                          className="invisible group-hover:visible group-hover:translate-y-0 translate-y-1 transition-all duration-200"
                        />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
