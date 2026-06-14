/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  role: string;
  achievement?: string;
  metrics?: { label: string; value: string; trend?: string }[];
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  category: 'marketing' | 'tech' | 'soft';
}

export interface TimelineItem {
  year: string;
  title: string;
  institution: string;
  location: string;
  details: string[];
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
  status: 'new' | 'read' | 'replied' | 'starred';
}
