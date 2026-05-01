"use client";

import { AdminEditor } from 'next-inline-editor';
import content from '../../../content/about.json';
import AboutPageContent from '@/components/pages/AboutPageContent';

export default function AdminPage() {
  return (
    <AdminEditor
      initialContent={content}
      contentFile="content/about.json"
      pageLabel="About"
    >
      {(updatedContent: any) => (
        <AboutPageContent content={updatedContent} />
      )}
    </AdminEditor>
  );
}
