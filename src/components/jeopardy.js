import React, { useState } from 'react';
import  Card  from '../components/ui/card';
import  Button  from '../components/ui/button';
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogAction } from '../components/ui/alert-dialog';

// const CATEGORIES = [
//   'Python Programming',
//   'Statistics & Probability',
//   'Machine Learning',
//   'Data Visualization',
//   'SQL & Databases',
//   'Data Preprocessing'
// ];

const CATEGORIES = [
  'Artificial Intelligence',
  'Data Science',
  'Cloud Computing',
  'Cybersecurity',
  'Blockchain',
  'Quantum Computing'
];

// const QUESTIONS = {
//   'Python Programming': {
//     200: {
//       question: 'This Python data structure is ordered, changeable, and allows duplicate values',
//       answer: 'What is a List?'
//     },
//     400: {
//       question: 'This Python library is the foundation for data manipulation and is abbreviated as pd',
//       answer: 'What is Pandas?'
//     },
//     600: {
//       question: 'This type of Python function takes another function as an argument',
//       answer: 'What is a decorator?'
//     },
//     800: {
//       question: 'This Python method is used to remove duplicates from a list while maintaining order',
//       answer: 'What is dict.fromkeys()?'
//     },
//     1000: {
//       question: 'This Python design pattern uses yield to create iterator objects',
//       answer: 'What is a Generator?'
//     }
//   },
//   'Statistics & Probability': {
//     200: {
//       question: 'This measure of central tendency is most affected by outliers',
//       answer: 'What is the Mean?'
//     },
//     400: {
//       question: 'This probability distribution is shaped like a bell curve',
//       answer: 'What is the Normal/Gaussian distribution?'
//     },
//     600: {
//       question: 'This statistical test is used to compare means between two independent groups',
//       answer: 'What is a t-test?'
//     },
//     800: {
//       question: 'This type of error occurs when we incorrectly reject a true null hypothesis',
//       answer: 'What is Type I error?'
//     },
//     1000: {
//       question: 'This sampling method divides the population into subgroups before sampling',
//       answer: 'What is Stratified Sampling?'
//     }
//   },
//   'Machine Learning': {
//     200: {
//       question: 'This metric measures the proportion of correctly predicted instances',
//       answer: 'What is Accuracy?'
//     },
//     400: {
//       question: 'This algorithm uses a tree of decisions to make predictions',
//       answer: 'What is a Decision Tree?'
//     },
//     600: {
//       question: 'This technique reduces overfitting by combining multiple models',
//       answer: 'What is Ensemble Learning?'
//     },
//     800: {
//       question: 'This neural network architecture is particularly good at processing sequential data',
//       answer: 'What is RNN (Recurrent Neural Network)?'
//     },
//     1000: {
//       question: 'This technique reduces dimensionality while preserving variance in the data',
//       answer: 'What is PCA (Principal Component Analysis)?'
//     }
//   },
//   'Data Visualization': {
//     200: {
//       question: 'This type of plot is best for showing the distribution of a single continuous variable',
//       answer: 'What is a Histogram?'
//     },
//     400: {
//       question: 'This Python visualization library is built on top of Matplotlib',
//       answer: 'What is Seaborn?'
//     },
//     600: {
//       question: 'This type of plot shows the relationship between two numerical variables',
//       answer: 'What is a Scatter plot?'
//     },
//     800: {
//       question: 'This visualization technique is used to display hierarchical data as nested rectangles',
//       answer: 'What is a Treemap?'
//     },
//     1000: {
//       question: 'This dimensionality reduction technique is used for visualizing high-dimensional data in 2D',
//       answer: 'What is t-SNE?'
//     }
//   },
//   'SQL & Databases': {
//     200: {
//       question: 'This SQL clause is used to filter rows in a query',
//       answer: 'What is WHERE?'
//     },
//     400: {
//       question: 'This SQL join type returns all rows from both tables where the join condition is met',
//       answer: 'What is INNER JOIN?'
//     },
//     600: {
//       question: 'This SQL function returns the number of rows in a group',
//       answer: 'What is COUNT?'
//     },
//     800: {
//       question: 'This SQL clause is used to filter groups after aggregation',
//       answer: 'What is HAVING?'
//     },
//     1000: {
//       question: 'This type of SQL join is used to combine rows from two tables based on a matched condition while keeping unmatched rows',
//       answer: 'What is LEFT/RIGHT JOIN?'
//     }
//   },
//   'Data Preprocessing': {
//     200: {
//       question: 'This technique is used to handle missing values in a dataset',
//       answer: 'What is Imputation?'
//     },
//     400: {
//       question: 'This preprocessing step scales features to have zero mean and unit variance',
//       answer: 'What is Standardization?'
//     },
//     600: {
//       question: 'This encoding technique is used to convert categorical variables into binary vectors',
//       answer: 'What is One-Hot Encoding?'
//     },
//     800: {
//       question: 'This technique is used to identify and handle outliers in data',
//       answer: 'What is IQR (Interquartile Range) method?'
//     },
//     1000: {
//       question: 'This sampling technique is used to handle imbalanced datasets by oversampling the minority class',
//       answer: 'What is SMOTE (Synthetic Minority Over-sampling Technique)?'
//     }
//   }
// };

const QUESTIONS = {
  'Artificial Intelligence': {
    200: {
      question: 'This AI learning approach requires labeled data for training',
      answer: 'What is Supervised Learning?'
    },
    400: {
      question: 'This AI technique allows models to process and understand human language',
      answer: 'What is Natural Language Processing (NLP)?'
    },
    600: {
      question: 'This type of AI model can generate text, images, and other content based on prompts',
      answer: 'What is a Generative AI?'
    },
    800: {
      question: 'This AI architecture uses attention mechanisms to process sequential data',
      answer: 'What is a Transformer?'
    },
    1000: {
      question: 'This AI approach attempts to mimic the biological neural networks of the human brain',
      answer: 'What is Deep Learning?'
    }
  },
  'Data Science': {
    200: {
      question: 'This statistical measure indicates how spread out the values are from their average',
      answer: 'What is Standard Deviation?'
    },
    400: {
      question: 'This type of analysis predicts future outcomes based on historical data',
      answer: 'What is Predictive Analytics?'
    },
    600: {
      question: 'This technique groups similar data points together without predefined labels',
      answer: 'What is Clustering?'
    },
    800: {
      question: 'This validation technique repeatedly splits data into training and testing sets',
      answer: 'What is Cross-Validation?'
    },
    1000: {
      question: 'This optimization technique finds the best hyperparameters for a machine learning model',
      answer: 'What is Grid Search/Hyperparameter Tuning?'
    }
  },
  'Cloud Computing': {
    200: {
      question: 'This cloud service model provides virtual machines and storage',
      answer: 'What is Infrastructure as a Service (IaaS)?'
    },
    400: {
      question: 'This AWS service is used for containerized application orchestration',
      answer: 'What is Amazon EKS/ECS?'
    },
    600: {
      question: 'This cloud architecture allows applications to run closest to end users',
      answer: 'What is Edge Computing?'
    },
    800: {
      question: 'This cloud design principle ensures applications can handle failures gracefully',
      answer: 'What is High Availability?'
    },
    1000: {
      question: 'This cloud pattern uses multiple providers to reduce dependency on a single vendor',
      answer: 'What is Multi-Cloud Strategy?'
    }
  },
  'Cybersecurity': {
    200: {
      question: 'This type of attack attempts to gain unauthorized access by guessing passwords',
      answer: 'What is Brute Force?'
    },
    400: {
      question: 'This security protocol encrypts data in transit between web browsers and servers',
      answer: 'What is SSL/TLS?'
    },
    600: {
      question: 'This security approach verifies identity using multiple verification methods',
      answer: 'What is Multi-Factor Authentication?'
    },
    800: {
      question: 'This type of security test simulates cyberattacks to find vulnerabilities',
      answer: 'What is Penetration Testing?'
    },
    1000: {
      question: 'This security framework provides zero-trust access to applications and resources',
      answer: 'What is SASE (Secure Access Service Edge)?'
    }
  },
  'Blockchain': {
    200: {
      question: 'This is the first and most well-known cryptocurrency',
      answer: 'What is Bitcoin?'
    },
    400: {
      question: 'This consensus mechanism requires solving complex mathematical problems',
      answer: 'What is Proof of Work?'
    },
    600: {
      question: 'These self-executing contracts live on the blockchain',
      answer: 'What are Smart Contracts?'
    },
    800: {
      question: 'This type of blockchain allows only authorized participants to validate transactions',
      answer: 'What is a Private/Permissioned Blockchain?'
    },
    1000: {
      question: 'This blockchain scaling solution processes transactions off the main chain',
      answer: 'What is Layer 2/Sidechains?'
    }
  },
  'Quantum Computing': {
    200: {
      question: 'This quantum unit of information can exist in multiple states simultaneously',
      answer: 'What is a Qubit?'
    },
    400: {
      question: 'This quantum phenomenon allows particles to affect each other instantaneously',
      answer: 'What is Entanglement?'
    },
    600: {
      question: 'This quantum algorithm efficiently factors large numbers',
      answer: 'What is Shor\'s Algorithm?'
    },
    800: {
      question: 'This error in quantum computers occurs when qubits lose their quantum properties',
      answer: 'What is Decoherence?'
    },
    1000: {
      question: 'This quantum technique uses interference to find solutions to optimization problems',
      answer: 'What is Quantum Annealing?'
    }
  }
};

const JeopardyGame = () => {
  const [scores, setScores] = useState({
    team1: 0,
    team2: 0
  });
  const [currentTeam, setCurrentTeam] = useState('team1');
  const [answered, setAnswered] = useState(new Set());
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleQuestionClick = (category, value) => {
    const key = `${category}-${value}`;
    if (answered.has(key)) return;

    setCurrentQuestion({
      category,
      value,
      ...QUESTIONS[category][value]
    });
  };

  const handleCorrect = () => {
    setScores(prev => ({
      ...prev,
      [currentTeam]: prev[currentTeam] + currentQuestion.value
    }));
    setAnswered(new Set([...answered, `${currentQuestion.category}-${currentQuestion.value}`]));
    setCurrentQuestion(null);
    setShowAnswer(false);
    // Switch teams
    setCurrentTeam(currentTeam === 'team1' ? 'team2' : 'team1');
  };

  const handleIncorrect = () => {
    setScores(prev => ({
      ...prev,
      [currentTeam]: prev[currentTeam] - currentQuestion.value
    }));
    setAnswered(new Set([...answered, `${currentQuestion.category}-${currentQuestion.value}`]));
    setCurrentQuestion(null);
    setShowAnswer(false);
    // Switch teams
    setCurrentTeam(currentTeam === 'team1' ? 'team2' : 'team1');
  };

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  const handlePass = () => {
    // Switch teams without scoring
    setCurrentTeam(currentTeam === 'team1' ? 'team2' : 'team1');
    setShowAnswer(false);
  };

  return (
      
    <div className="p-4">

      {/* Title */}
      {/* <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">Strategism Jeopardy</h1> */}
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-center text-blue-900 mb-10 tracking-tight  bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent drop-shadow-lg">Strategism Jeopardy</h1>
      {/* Team Scores */}
      <div className="flex justify-between mb-6">
        <div className={`text-2xl font-bold ${currentTeam === 'team1' ? 'text-blue-600' : ''}`}>
          Team 1: ${scores.team1}
          {currentTeam === 'team1' && ' (Current Turn)'}
        </div>
        <div className={`text-2xl font-bold ${currentTeam === 'team2' ? 'text-blue-600' : ''}`}>
          Team 2: ${scores.team2}
          {currentTeam === 'team2' && ' (Current Turn)'}
        </div>
      </div>
      
      <div className="grid grid-cols-6 gap-4">
        {/* Categories */}
        {CATEGORIES.map((category) => (
          <div key={category} className="text-center font-bold bg-blue-900 text-white p-4 rounded">
            {category}
          </div>
        ))}
        
        {/* Questions */}
        {[200, 400, 600, 800, 1000].map((value) => (
          CATEGORIES.map((category) => {
            const key = `${category}-${value}`;
            return (
              <Button
                key={key}
                onClick={() => handleQuestionClick(category, value)}
                className={`h-24 text-xl ${answered.has(key) ? 'bg-gray-500' : 'bg-blue-500 hover:bg-blue-600'}`}
                disabled={answered.has(key)}
              >
                ${value}
              </Button>
            );
          })
        ))}
      </div>

      {/* Question Dialog */}
      {currentQuestion && (
        <AlertDialog open={true}>
          <AlertDialogContent className="max-w-2xl">
            <AlertDialogHeader>
              <AlertDialogTitle>
                {currentQuestion.category} - ${currentQuestion.value}
                <div className="text-sm text-blue-600">
                  {currentTeam === 'team1' ? 'Team 1' : 'Team 2'}'s Turn
                </div>
              </AlertDialogTitle>
              <AlertDialogDescription className="text-lg">
                {currentQuestion.question}
                {showAnswer && (
                  <div className="mt-4 font-bold text-blue-600">
                    {currentQuestion.answer}
                  </div>
                )}
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter className="flex gap-2">
              {!showAnswer ? (
                <>
                  <Button onClick={handleShowAnswer} className="bg-yellow-500 hover:bg-yellow-600">
                    Show Answer
                  </Button>
                  <Button onClick={handlePass} className="bg-gray-500 hover:bg-gray-600">
                    Pass to Other Team
                  </Button>
                </>
              ) : (
                <>
                  <Button onClick={handleCorrect} className="bg-green-500 hover:bg-green-600">
                    Correct
                  </Button>
                  <Button onClick={handleIncorrect} className="bg-red-500 hover:bg-red-600">
                    Incorrect
                  </Button>
                </>
              )}
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </div>
  );
};

export default JeopardyGame;