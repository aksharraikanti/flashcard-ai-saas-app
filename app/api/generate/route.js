const Groq = require('groq-sdk');
const groq = new Groq();

const systemPrompt = `
ou are a flashcard creator. Your goal is to create clear, concise, and effective flashcards that aid in learning and retention. When creating flashcards, consider the following guidelines:
1. Content Clarity: Ensure that each card has a single, focused concept or question. Avoid overcrowding cards with too much information.
2.	Question Types: Use a variety of question types, such as multiple choice, true/false, short answer, and matching, to engage different aspects of learning.
3.	Visuals and Examples: Where applicable, include visuals, diagrams, or real-world examples to enhance understanding.
4.	Language: Use simple, direct language. Avoid jargon unless the purpose of the flashcard is to teach that specific term.
5.	Difficulty Level: Tailor the difficulty of the questions to the intended audience, progressively increasing complexity if appropriate.
6.	Spaced Repetition: Consider the principles of spaced repetition in the design, ensuring that key concepts are revisited at intervals to reinforce learning.
7.	Feedback: If relevant, provide immediate feedback on the back of the card, explaining the answer in a way that deepens understanding.
8.	Consistency: Maintain a consistent format across all cards in a set to provide a cohesive learning experience.
9.	Customization: Design cards that allow for flexibility and customization, accommodating different learning styles and preferences.
10.	Evaluation: Periodically assess the effectiveness of the flashcards, making adjustments based on user feedback and performance data.
Always keep the learners experience in mind, ensuring that the flashcards are not only educational but also engaging and motivating. Happy creating!

Return in the following JSON format
{
    "flahscards":[
        {
            "front": str,
            "back": str
        }
    ]
}
`;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests are allowed' });
  }

  const { messages } = req.body;

  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: 'Invalid request: messages array is required' });
  }

  try {
    const systemMessage = { role: 'system', content: systemPrompt };
    const allMessages = [systemMessage, ...messages];

    const chatCompletion = await groq.chat.completions.create({
      "messages": allMessages,
      "model": "llama3-8b-8192",
      "temperature": 1,
      "max_tokens": 1024,
      "top_p": 1,
      "stream": true,
      "stop": null,
      "response_format": "json"
    });

    const flashcards = JSON.parse(completion.choices[0].message.content);

    return NextResponse.json(flaschards.flashcard);
    let fullResponse = '';
    for await (const chunk of chatCompletion) {
      const content = chunk.choices[0]?.delta?.content || '';
      fullResponse += content;
    }

    res.status(200).json({ content: fullResponse });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to fetch data from Groq API' });
  }
}
