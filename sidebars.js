// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure

  // But you can create a sidebar manually

  tutorialSidebar: [
    {
      type: 'category',
      label: 'Học liệu số',
      items: [
        'hoc-lieu-so/trang-chu',
        'hoc-lieu-so/video',
        'hoc-lieu-so/slide',
        'hoc-lieu-so/html',
        'hoc-lieu-so/audio',
        'hoc-lieu-so/ispring-content',
        {
          type: 'category',
          label: 'Các loại câu hỏi',
          items: [
            'hoc-lieu-so/cac-dang-cau-hoi/quiz-single-choice',
            'hoc-lieu-so/cac-dang-cau-hoi/quiz-multiple-choice',
            'hoc-lieu-so/cac-dang-cau-hoi/quiz-ordering',
            'hoc-lieu-so/cac-dang-cau-hoi/quiz-matching',
            'hoc-lieu-so/cac-dang-cau-hoi/quiz-drag-drop-categorize',
            'hoc-lieu-so/cac-dang-cau-hoi/quiz-fill-in-blank',
            'hoc-lieu-so/cac-dang-cau-hoi/quiz-connection',
            'hoc-lieu-so/cac-dang-cau-hoi/quiz-composite',
            'hoc-lieu-so/cac-dang-cau-hoi/quiz-true-false',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Soạn học liệu số',
      items: [
        'soan-hoc-lieu-so/trang-chu',
        'soan-hoc-lieu-so/video',
        'soan-hoc-lieu-so/slide',
        'soan-hoc-lieu-so/html',
        'soan-hoc-lieu-so/audio',
        'soan-hoc-lieu-so/ispring-content',
        {
          type: 'category',
          label: 'Các loại câu hỏi',
          items: [
            'soan-hoc-lieu-so/cac-dang-cau-hoi/quiz-single-choice',
            'soan-hoc-lieu-so/cac-dang-cau-hoi/quiz-multiple-choice',
            'soan-hoc-lieu-so/cac-dang-cau-hoi/quiz-ordering',
            'soan-hoc-lieu-so/cac-dang-cau-hoi/quiz-matching',
            'soan-hoc-lieu-so/cac-dang-cau-hoi/quiz-drag-drop-categorize',
            'soan-hoc-lieu-so/cac-dang-cau-hoi/quiz-fill-in-blank',
            'soan-hoc-lieu-so/cac-dang-cau-hoi/quiz-connection',
            'soan-hoc-lieu-so/cac-dang-cau-hoi/quiz-composite',
            'soan-hoc-lieu-so/cac-dang-cau-hoi/quiz-true-false',
          ],
        },
      ],
    }
  ],

};

export default sidebars;
