import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import MonacoEditor from '@monaco-editor/react';
import ReactMarkdown from "react-markdown";
import { marked } from 'marked'; // Import marked to parse Markdown content
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CoursePage = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeSection, setActiveSection] = useState('overview');
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalOutput, setTerminalOutput] = useState('');
  const [aiOutput, setAiOutput] = useState('');
  const [aiQuestion, setAiQuestion] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('c'); // Default language is C
  const [isLoading, setIsLoading] = useState(false);
  const [showAnswers, setShowAnswers] = React.useState({}); // Use an object for better management

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await axios.get(`https://iu-codelab.onrender.com/api/course/${courseId}`);
        setCourse(res.data);
      } catch (err) {
        setError('Error fetching course data');
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [courseId]);

  const handleExecuteCode = async () => {
    try {
      const res = await axios.post(`https://iu-codelab.onrender.com/api/execute`, {
        code: terminalInput,
        language: selectedLanguage, // Using selected language
      });
      setTerminalOutput(res.data.output);
    } catch (err) {
      setTerminalOutput('Error executing code');
    }
  };

  const handleAskAI = async () => {
    setIsLoading(true);
    setError(false);
    try {
      const res = await axios.post(`https://iu-codelab.onrender.com/api/askAI`, {
        question: aiQuestion,
      });
      setAiOutput(res.data.response);
      setAiQuestion(''); // Clear the input box after a successful response
    } catch (err) {
      setError(true);
      setAiOutput('Error fetching AI response. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const toggleAnswer = (quizIndex, qIndex) => {
    setShowAnswers((prev) => ({
      ...prev,
      [quizIndex]: {
        ...prev[quizIndex],
        [qIndex]: !prev[quizIndex]?.[qIndex],
      },
    }));
  };

  if (loading) return <h2 className="text-center mt-8">Loading course content...</h2>;
  if (error) return <h2 className="text-center mt-8 text-red-500">{error}</h2>;

  const renderSection = () => {
    switch (activeSection) {
      case 'overview':
  return (
    <section className="bg-gray-800 p-6 rounded-lg shadow-md text-white">
      <h3 className="text-3xl font-bold border-b-2 border-blue-500 pb-2">
        Course Overview
      </h3>
      <div className="mt-6 text-gray-300 space-y-8">
        {/* Course Description */}
        <div>
          <p className="text-lg leading-relaxed bg-gray-900 p-4 rounded-lg shadow-inner">
            {course.overview.course_description}
          </p>
        </div>

        {/* Learning Outcomes */}
        <div>
          <h4 className="text-2xl font-semibold flex items-center gap-2">
            <span className="text-blue-400">📘</span> Learning Outcomes
          </h4>
          <ul className="list-disc ml-8 mt-2 space-y-2">
            {course.overview.learning_outcomes?.map((outcome, index) => (
              <li key={index} className="text-gray-400">
                {outcome}
              </li>
            ))}
          </ul>
        </div>

        {/* Key Topics Covered */}
        <div>
          <h4 className="text-2xl font-semibold flex items-center gap-2">
            <span className="text-green-400">📚</span> Key Topics Covered
          </h4>
          <ul className="list-disc ml-8 mt-2 space-y-2">
            {course.overview.key_topics_covered?.map((topic, index) => (
              <li key={index} className="text-gray-400">
                {topic}
              </li>
            ))}
          </ul>
        </div>

        {/* Lab Sessions */}
        <div>
          <h4 className="text-2xl font-semibold flex items-center gap-2">
            <span className="text-yellow-400">🧪</span> Lab Sessions
          </h4>
          <ul className="list-disc ml-8 mt-2 space-y-2">
            {course.overview.lab_sessions?.map((session, index) => (
              <li key={index} className="text-gray-400">
                {session}
              </li>
            ))}
          </ul>
        </div>

        {/* Assessment Method */}
        <div>
          <h4 className="text-2xl font-semibold flex items-center gap-2">
            <span className="text-red-400">📝</span> Assessment Method
          </h4>
          <ul className="list-disc ml-8 mt-2 space-y-2">
            {course.overview.assessment_method?.map((method, index) => (
              <li key={index} className="text-gray-400">
                {method}
              </li>
            ))}
          </ul>
        </div>

        {/* Resources and Tools */}
        <div>
          <h4 className="text-2xl font-semibold flex items-center gap-2">
            <span className="text-purple-400">🛠️</span> Resources and Tools
          </h4>
          <ul className="list-disc ml-8 mt-2 space-y-2">
            {course.overview.resources_and_tools?.map((resource, index) => (
              <li key={index} className="text-gray-400">
                {resource}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );

      case 'syllabus':
        return (
          <section>
            <h3 className="text-2xl font-semibold">Syllabus</h3>
            <div className="mt-4 space-y-6">
              {course.syllabus?.map((week, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-800 rounded-lg shadow-md"
                >
                  <h4 className="text-lg font-semibold text-white">
                    {week.title}
                  </h4>
                  <ul className="list-disc ml-5 mt-2 text-gray-400">
                    {week.topics.map((topic, topicIndex) => (
                      <li key={topicIndex}>{topic}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        );

  case 'content':
  return (
    <section>
      <h3 className="text-2xl font-semibold mb-6">Course Content</h3>
      <div className="bg-gray-800 rounded-lg p-6 mt-4">
        <h4 className="text-xl font-semibold text-white mb-6">Course Topics</h4>
        {course.sections?.length > 0 ? (
          course.sections.map((section, index) => (
            <div key={index} className="mb-8">
              {/* Section Title */}
              <h5 className="text-lg font-semibold text-white">{section.title}</h5>
              
              {/* Section Content - Render Markdown as HTML */}
              <div
                className="text-gray-300 mt-4"
                dangerouslySetInnerHTML={{ __html: marked(section.content) }}
              />
            </div>
          ))
        ) : (
          <p className="text-gray-400">No topics available for this course.</p>
        )}
      </div>
    </section>
  );
      
      case 'videos':
        return (
          <section>
            <h3 className="text-2xl font-semibold">Videos</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              {course.videos?.map((video, index) => {
                // Extract video ID and create embed URL
                const videoId = video.url.split('v=')[1]?.split('&')[0] || video.url.split('/').pop();
                const embedUrl = `https://www.youtube.com/embed/${videoId}`;
      
                return (
                  <div key={index} className="p-4 bg-gray-800 rounded-lg shadow-md">
                    <h4 className="text-lg font-semibold">{video.title}</h4>
                    <div className="mt-2 aspect-w-16 aspect-h-9">
                      <iframe
                        src={embedUrl}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full rounded-md"
                      ></iframe>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        );

  case 'notes':
  return (
    <section>
      <h3 className="text-2xl font-semibold">Notes</h3>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {course.notes?.map((note, index) => (
          <div key={index} className="p-4 bg-gray-800 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold text-white">{note.title}</h4>
            <div className="mt-4 flex justify-center">
              <iframe
                src={note.url}
                title={note.title}
                className="w-72 h-[450px] rounded-md"
                frameBorder="0"
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

      case 'programs':
        return (
          <section>
            <h3 className="text-2xl font-semibold">Programs</h3>
            <div className="mt-4 space-y-6">
              {course.programs?.map((program, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-800 rounded-lg shadow-md"
                >
                  <h4 className="text-lg font-semibold text-white">
                    {program.title}
                  </h4>
                  <p className="text-gray-400 mt-2">{program.description}</p>
                  <div className="relative mt-4">
                    <SyntaxHighlighter
                      language={program.language}
                      style={vscDarkPlus}
                      className="rounded-md overflow-auto"
                    >
                      {program.code}
                    </SyntaxHighlighter>
                    <button
                      className="absolute top-2 right-2 bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600"
                      onClick={() => {
                        navigator.clipboard.writeText(program.code);
                        alert('Code copied to clipboard!');
                      }}
                    >
                      Copy
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );

      case 'assignments':
        return (
          <section className="p-4">
            <h3 className="text-2xl font-semibold text-white mb-4">Assignments</h3>
            <div className="space-y-6">
              {course.assignments?.map((assignment, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300"
                >
                  {/* Assignment Title */}
                  <h4 className="text-xl font-bold text-blue-400 mb-2">{assignment.title}</h4>
                  
                  {/* Questions List */}
                  <ul className="list-decimal list-inside space-y-2">
                    {assignment.questions.map((question, qIndex) => (
                      <li key={qIndex} className="text-gray-300">
                        {question}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        );
      
      case 'quizzes':
        return (
          <section>
            <h3 className="text-2xl font-semibold">Quizzes</h3>
            <div className="mt-4">
              {course.quizzes?.length > 0 ? (
                course.quizzes.map((quiz, quizIndex) => (
                  <div
                    key={quizIndex}
                    className="bg-gray-800 rounded-lg p-4 mb-4 shadow-lg"
                  >
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {quiz.title}
                    </h4>
                    <p className="text-gray-400 mb-2">
                      Number of Questions: {quiz.noOfQuestions}
                    </p>
                    <div className="space-y-4">
                      {quiz.questions.map((question, qIndex) => (
                        <div
                          key={qIndex}
                          className="bg-gray-700 rounded-md p-3 text-gray-300"
                        >
                          <p className="font-medium text-gray-200">
                            Q{qIndex + 1}: {question.question}
                          </p>
                          <ul className="list-disc list-inside mt-2">
                            {question.options.map((option, oIndex) => (
                              <li key={oIndex} className="text-gray-400">
                                {option}
                              </li>
                            ))}
                          </ul>
                          <button
                            className="mt-2 text-sm text-blue-400 hover:text-blue-500 underline"
                            onClick={() => toggleAnswer(quizIndex, qIndex)}
                          >
                            {showAnswers[quizIndex]?.[qIndex]
                              ? 'Hide Answer'
                              : 'View Answer'}
                          </button>
                          {showAnswers[quizIndex]?.[qIndex] && (
                            <p className="mt-2 text-sm text-green-400">
                              Answer: {question.answer}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                <div className="bg-gray-800 rounded-lg p-4 mt-4">
                  <p className="text-gray-400">
                    No quizzes available for this course.
                  </p>
                </div>
              )}
            </div>
          </section>
        );

        case 'books':
  return (
    <section className="p-4">
      <h3 className="text-2xl font-semibold text-white mb-4">Books Recommendation</h3>
      <div className="space-y-6">
        {course.books?.length > 0 ? (
          course.books.map((book, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300"
            >
              {/* Book Title */}
              <h4 className="text-xl font-bold text-blue-400 mb-2">{book.title}</h4>

              {/* Author */}
              <p className="text-lg text-gray-400 mb-2">by {book.author}</p>

              {/* Description */}
              <p className="text-gray-300 mb-4">{book.description}</p>

              {/* Link to Book */}
              <a
                href={book.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline hover:text-blue-600"
              >
                View Book
              </a>
            </div>
          ))
        ) : (
          <div className="bg-gray-800 rounded-lg p-4 mt-4">
            <p className="text-gray-400">No books available for this course.</p>
          </div>
        )}
      </div>
    </section>
  );
      
      case 'terminal':
        return (
          <section>
            <h3 className="text-2xl font-semibold">Integrated Terminal</h3>
            <div className="flex flex-col lg:flex-row gap-8 mt-4">
              {/* Code Editor Section */}
              <div className="flex-1 bg-gray-800 rounded-lg p-4">
                <div className="flex gap-4 items-center mb-4">
                  <label className="text-gray-300 text-lg">Select Language:</label>
                  <select
                    value={selectedLanguage}
                    onChange={(e) => setSelectedLanguage(e.target.value)}
                    className="bg-gray-700 text-white rounded-md p-2"
                  >
                    <option value="c">C</option>
                    <option value="cpp">C++</option>
                    <option value="java">Java</option>
                    <option value="python">Python</option>
                  </select>
                </div>
                <div className="h-[300px] md:h-[400px]">
                  <MonacoEditor
                    language={selectedLanguage}
                    value={terminalInput}
                    onChange={(value) => setTerminalInput(value || '')}
                    theme="vs-dark"
                    options={{
                      lineNumbers: 'on',
                      minimap: { enabled: false },
                      wordWrap: 'on',
                      fontSize: 18,
                    }}
                  />
                </div>
              </div>
      
              {/* Output Section */}
              <div className="flex-1 bg-gray-800 rounded-lg p-4">
                <button
                  onClick={handleExecuteCode}
                  className="w-full bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Execute Code
                </button>
                <div className="mt-4 bg-gray-700 text-white p-2 rounded-md overflow-auto">
                  <h4 className="text-lg font-semibold">Output:</h4>
                  <pre className="mt-2 text-gray-300 break-words whitespace-pre-wrap">
                    {terminalOutput || 'Output will appear here...'}
                  </pre>
                </div>
              </div>
            </div>
          </section>
        );

case 'help':
  return (
    <section className="max-w-screen-lg mx-auto p-4">
      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-center text-blue-600 mb-6">
        Ask AI for Help!
      </h3>
      <div className="bg-gray-800 rounded-lg p-6 mt-6 shadow-lg transition-transform hover:scale-105">
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-4">
          Have a question related to your course? Let AI assist you! Type your query below and get an instant, detailed response powered by AI.
        </p>

        <div className="mb-6">
          <label className="block text-gray-300 text-lg sm:text-xl lg:text-2xl font-medium mb-2">
            Ask Your Question:
          </label>
          <textarea
            className="w-full bg-gray-700 text-white p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            placeholder="What would you like to know? Type your question here..."
            rows="4"
            value={aiQuestion}
            onChange={(e) => setAiQuestion(e.target.value)}
          />
        </div>

        <button
          onClick={handleAskAI}
          className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-2 rounded-lg shadow-md hover:from-blue-600 hover:to-indigo-700 transition-all"
        >
          Get Instant Help
        </button>

        {/* Loader State */}
        {isLoading && (
          <div className="flex justify-center mt-4">
            <div className="spinner-border animate-spin border-t-4 border-blue-500 rounded-full w-8 h-8"></div>
          </div>
        )}

        {/* Error Handling */}
        {error && (
          <div className="mt-6 bg-red-600 text-white p-4 rounded-md">
            <p className="font-semibold">Oops! Something went wrong. Please try again.</p>
          </div>
        )}

        {/* AI Response Box */}
        <div className="mt-6 bg-gray-700 text-white p-4 rounded-md overflow-auto max-h-96">
          <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold">AI Response:</h4>
          <div className="mt-2 text-gray-300 whitespace-pre-wrap break-words">
            {aiOutput ? (
              <ReactMarkdown>{aiOutput}</ReactMarkdown>
            ) : (
              'Your AI response will appear here shortly...'
            )}
          </div>
        </div>
      </div>
    </section>
  );
     
  

      default:
        return <p>Invalid Section</p>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
<header className="flex items-center justify-between p-4 bg-gray-800 shadow-md">
  {/* Left Section - Logo and Course Name */}
  <div className="flex items-center space-x-4">
    <img
      src="/assets/IU-CodeLab-Logo.png"
      alt="IU CodeLab Logo"
      className="h-10 md:h-14 transform transition-transform duration-300 hover:scale-105"
    />
    <div>
      {/* <h2 className="text-2xl font-bold tracking-wide">{course.name}</h2> */}
      <p className="text-lg text-gray-400">Interactive learning made simple</p>
    </div>
  </div>

  {/* Right Section - Back to Dashboard Button */}
  <button
    onClick={() => navigate(-1)}
    className="flex items-center space-x-2 bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 19l-7-7 7-7"
      />
    </svg>
    <span>Back to Dashboard</span>
  </button>
</header>

<div className="sticky top-0 z-50 bg-gray-800 shadow-md">
<nav className="flex flex-wrap justify-center bg-gray-700 py-2 px-4 space-x-4 overflow-x-auto scrollbar-hide">
  {[
    { id: 'overview', label: 'Overview' },
    { id: 'syllabus', label: 'Syllabus' },
    { id: 'content', label: 'Content' },
    { id: 'videos', label: 'Videos' },
    { id: 'notes', label: 'Notes' },
    { id: 'programs', label: 'Programs' },
    { id: 'assignments', label: 'Assignments' },
    { id: 'quizzes', label: 'Quizzes' },
    { id: 'books', label: 'Books' },
    { id: 'terminal', label: 'Terminal' },
    { id: 'help', label: 'Help' },
  ].map((section) => (
    <button
      key={section.id}
      className={`px-4 py-2 rounded-lg ${
        activeSection === section.id
          ? 'bg-blue-600 text-white'
          : 'bg-gray-800 text-gray-300'
      } hover:bg-blue-700 transition`}
      onClick={() => setActiveSection(section.id)}
    >
      {section.label}
    </button>
  ))}
</nav>
</div>

      <div className="p-8">{renderSection()}</div>
    </div>
  );
};

export default CoursePage;
