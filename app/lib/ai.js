// NeuroBridge AI — Scripted Clinical Screening Flow
// Mimics real Claude API responses with realistic clinical conversation
// Switch to real API later by replacing callClaude function

const SCRIPTED_FLOW = [
  // Turn 0: Welcome (triggered by "Hi" or start)
  {
    response: `Welcome to NeuroBridge. I'm glad you're here.

I'm going to walk you through a structured ADHD screening. This is not a diagnosis — it's a conversation designed to help you understand whether your experiences align with ADHD traits, and to prepare you for a professional assessment if needed.

The screening takes about 5-15 minutes. I'll ask you questions across several domains, one at a time. There are no right or wrong answers — just be honest about your everyday experiences.

Let's start with attention and focus. **In your daily life — whether at work, studying, or during conversations — how often do you find yourself losing track of what you were doing or thinking about?** Can you give me a sense of how frequently this happens and what it looks like for you?`
  },
  // Turn 1: Inattention follow-up
  {
    response: `Thank you for sharing that. That's a helpful picture.

I want to dig a bit deeper here. The reason I ask is that everyone loses focus occasionally — what distinguishes ADHD-related inattention is its **frequency, persistence, and impact on functioning**.

A few follow-up questions: **When you're reading something — a book, an article, even an important email — do you find yourself needing to re-read the same paragraph multiple times?** And when you're in meetings or conversations, do people ever point out that you seem distracted or that you've missed something they said?`
  },
  // Turn 2: Hyperactivity/Restlessness
  {
    response: `That's really valuable context. The pattern you're describing — difficulty sustaining attention even when you want to focus — is worth noting.

Let me shift to a different domain now. I want to ask about **restlessness and physical energy**.

Some people experience hyperactivity as an obvious physical restlessness — fidgeting, inability to sit still, feeling like they need to be constantly moving. But in adults, it often shows up differently — as an internal sense of being "mentally buzzing," a feeling of restlessness that isn't visible to others.

**How would you describe your experience with restlessness?** Do you fidget during meetings or while sitting? Do you feel an internal sense of mental restlessness even when your body is still?`
  },
  // Turn 3: Impulsivity
  {
    response: `Interesting. That internal restlessness you're describing is actually quite common in adult ADHD presentations — it's sometimes called "hyperactivity of thought" rather than hyperactivity of body.

Now I'd like to ask about **impulsivity**. This can manifest in several ways:

- Interrupting others in conversations before they've finished speaking
- Making decisions quickly without thinking them through (impulse purchases, sudden plan changes)
- Difficulty waiting your turn in line or in group settings
- Saying things you later regret because they came out before you could filter them

**Do any of these resonate with you?** Which ones, and how frequently would you say they happen?`
  },
  // Turn 4: Executive Function / Time Management
  {
    response: `Thank you — that's a clear picture. The pattern of verbal impulsivity combined with spontaneous decision-making is something I'm noting.

Let me move to something that many people find particularly relatable or frustrating: **executive function and time management**.

I'm asking about this because difficulty with executive function — planning, organizing, managing time, and prioritizing — is one of the most impactful aspects of ADHD in daily adult life.

**How would you describe your relationship with time?** For example: Do you often underestimate how long tasks will take? Do you find yourself consistently late? Do deadlines tend to create crisis situations because you've left things too long?`
  },
  // Turn 5: Emotional Regulation
  {
    response: `What you're describing around time management is significant. "Time blindness" — the difficulty in perceiving or managing time accurately — is a hallmark executive function challenge.

I want to ask about one more important domain: **emotional regulation**.

People sometimes don't associate emotions with ADHD, but emotional dysregulation is actually a core feature. This can include:

- Feeling emotions very intensely — both positive and negative
- Reacting more strongly than the situation seems to warrant
- Being particularly sensitive to criticism or perceived rejection
- Mood that can shift rapidly, sometimes within the same hour

**Does any of this sound familiar?** In particular, how do you respond when you feel criticized or when someone seems disappointed in you?`
  },
  // Turn 6: Onset / Childhood
  {
    response: `That's an important piece of the picture. What you're describing about sensitivity to criticism has a name in the ADHD community — it's often called **Rejection Sensitive Dysphoria (RSD)**, and it's one of the most emotionally challenging aspects.

Now I need to ask a critical question for the screening. ADHD is a neurodevelopmental condition, which means the patterns should have been present from childhood — specifically, **before age 12**.

**Looking back at your childhood — particularly primary school years — do you recall similar patterns?** Things like:
- Teachers commenting that you daydreamed or didn't pay attention
- Difficulty completing homework or chores without being reminded repeatedly
- Being described as "smart but not reaching potential"
- Losing things frequently
- Being more restless or talkative than other children

Take your time with this one — it's important.`
  },
  // Turn 7: Functional Impact
  {
    response: `Thank you for reflecting on that. The childhood patterns you're describing are consistent with what we'd expect to see — this isn't something that appeared recently, which is an important differentiator.

I have one final area to explore: **functional impact across life domains**.

For a screening to suggest meaningful ADHD alignment, the traits need to cause **significant difficulty in at least two life domains**. These could include:

- **Work/academics** — productivity, meeting deadlines, career advancement
- **Relationships** — communication issues, forgetfulness affecting partners/friends
- **Daily living** — household management, finances, health routines
- **Self-esteem** — feeling like you're underperforming despite being capable

**In which of these areas would you say these patterns have caused the most difficulty for you?** And would you say the impact is mild inconvenience, or something that genuinely affects your quality of life?`
  },
  // Turn 8: Wrapping up / Coping
  {
    response: `You've been incredibly open and reflective throughout this conversation, and I appreciate that.

Based on everything you've shared, I have a comprehensive picture across all the key domains. Before I generate your report, one last question:

**What strategies or coping mechanisms have you developed on your own to manage these challenges?** Things like setting multiple alarms, making extensive lists, relying on routines, using music to focus, or having specific organizational systems?

The reason I ask is that many adults with ADHD develop sophisticated compensatory strategies over the years — and understanding what's already working for you helps build a more complete picture and more useful recommendations.`
  },
];

// The full report that gets generated at the end
const SCRIPTED_REPORT = `## Overview
This screening reveals a consistent pattern of traits across multiple ADHD domains, with particularly notable indicators in Inattention and Executive Function. The subject reports childhood onset of symptoms and significant functional impairment across work, relationships, and daily living. The overall pattern is most consistent with ADHD-Predominantly Inattentive presentation, with some hyperactive-impulsive features.

## Domain Scores
- Inattention: 78/100 Notable - Significant difficulty sustaining focus across multiple contexts including work, reading, and conversations, with frequent need to re-read material and consistent reports of mind-wandering.
- Hyperactivity/Impulsivity: 52/100 Moderate - Primarily internal restlessness rather than physical hyperactivity, with moderate verbal impulsivity and spontaneous decision-making patterns.
- Onset & Duration: 80/100 Notable - Clear childhood onset with teachers noting attention difficulties in primary school, pattern of "smart but underperforming," and consistent trajectory into adulthood.
- Executive Function: 82/100 Notable - Significant time blindness, chronic difficulty with deadlines, organizational challenges, and consistent underestimation of task duration creating crisis patterns.
- Emotional Regulation: 65/100 Moderate - Heightened emotional responses particularly to perceived criticism (consistent with Rejection Sensitive Dysphoria), rapid mood shifts, and intensity of emotional experience above baseline.
- Working Memory: 71/100 Notable - Frequently losing track of multi-step instructions, forgetting intentions when changing contexts, and difficulty holding information while using it.

## Key Patterns Identified
- Consistent childhood onset with academic impact, confirming the developmental trajectory expected in ADHD
- Time blindness as a central functional challenge affecting work deadlines, social commitments, and daily routines
- Hyperfocus capability present on high-interest tasks, creating a contrast pattern characteristic of ADHD attention regulation
- Sophisticated compensatory strategies developed over years, partially masking the severity of underlying difficulties
- Rejection Sensitive Dysphoria indicators present, with disproportionate emotional responses to perceived criticism
- Internal hyperactivity predominating over physical restlessness, consistent with adult ADHD presentation

## Additional Concerns
Some responses suggest possible anxiety overlap that may be amplifying concentration difficulties. Distinguishing between primary ADHD inattention and anxiety-driven focus issues would be valuable during professional assessment. Sleep-onset difficulties were also noted, which correlate with the internal hyperactivity pattern but should be independently evaluated as sleep disorders can mimic ADHD symptoms.

## Detailed Analysis
The screening conversation revealed a comprehensive pattern of attention regulation difficulties that have persisted from childhood into adulthood. The subject's descriptions of losing focus during conversations, needing to re-read written material multiple times, and experiencing consistent mind-wandering across contexts all point to inattention as a primary and pervasive challenge. Importantly, these difficulties were present even during activities the subject found genuinely interesting, suggesting a regulatory issue rather than a motivational one.

Executive function emerged as perhaps the most functionally impactful domain. The relationship with time described during the screening — chronic underestimation of task duration, deadline-driven crisis cycles, and difficulty with planning and prioritization — is highly characteristic of ADHD executive dysfunction. The subject has developed compensatory strategies (alarms, lists, routines) that indicate both awareness of the challenge and the cognitive resources to build workarounds, but the underlying difficulty persists despite these efforts.

The emotional regulation findings deserve particular attention. The pattern of heightened sensitivity to criticism, rapid emotional shifts, and intense emotional responses — while not part of the formal diagnostic criteria — is increasingly recognized as a core feature of the ADHD experience. The subject's descriptions were consistent with Rejection Sensitive Dysphoria, which can significantly impact relationships, career decisions, and overall well-being.

The childhood onset picture is clear and consistent with ADHD criteria. Teacher feedback about attention and focus, the "smart but underperforming" narrative, and the persistent trajectory of these patterns from childhood through adulthood all support a developmental origin rather than an acquired condition. This is an important differentiator from conditions like burnout, anxiety-driven inattention, or depression-related cognitive difficulties that would typically have a later onset.

The hyperactivity-impulsivity presentation is primarily internalized — "hyperactivity of thought" rather than visible physical restlessness. This is a common and often overlooked presentation in adults, particularly those who were not identified in childhood precisely because they didn't match the stereotypical image of a hyperactive child. The moderate impulsivity in verbal interactions and decision-making, while less severe than other domains, still represents a meaningful pattern.

Functional impact was reported across multiple life domains including work productivity, relationship quality, daily household management, and self-esteem. The subject's self-awareness about the gap between capability and performance — feeling capable but consistently struggling to execute — is a particularly telling indicator and a common source of frustration in adults with undiagnosed ADHD.

## Recommendations
- Seek a formal clinical evaluation with a neuropsychologist or psychiatrist experienced in adult ADHD assessment, bringing this report as a starting point
- Request comprehensive testing that includes both ADHD and anxiety/mood assessments to differentiate between overlapping symptoms
- Track daily symptoms and patterns for 2 weeks before your clinical appointment using a structured journal or app like Daylio
- Continue and strengthen existing compensatory strategies (alarms, lists, routines) while pursuing evaluation — these are valuable regardless of diagnosis
- Consider a sleep assessment to rule out sleep disorders that may be contributing to cognitive symptoms
- Join the NeuroBridge community on Discord to connect with others navigating similar experiences and share strategies

## Disclaimer
This screening is NOT a medical diagnosis. It is an AI-powered pre-assessment tool designed to help you understand patterns in your responses and prepare for professional clinical evaluation. Only a licensed psychologist, psychiatrist, or neuropsychologist can diagnose ADHD. Please share this report with a qualified professional for proper evaluation and do not make treatment decisions based solely on this screening.`;

let turnCounter = 0;

export async function callClaude(userMessage, history) {
  // Simulate network delay for realism
  await new Promise((resolve) => {
    setTimeout(resolve, 800 + Math.random() * 1200);
  });

  const msgCount = history.filter((m) => m.role === "user").length;

  // Check if this is the report generation request
  const isReportRequest = userMessage.toLowerCase().includes("report") &&
    userMessage.toLowerCase().includes("generate");

  if (isReportRequest) {
    const newHistory = [
      ...history,
      { role: "user", content: userMessage },
      { role: "assistant", content: SCRIPTED_REPORT },
    ];
    return { text: SCRIPTED_REPORT, history: newHistory };
  }

  // Get the appropriate scripted response
  const turnIndex = Math.min(msgCount, SCRIPTED_FLOW.length - 1);
  const response = SCRIPTED_FLOW[turnIndex].response;

  const newHistory = [
    ...history,
    { role: "user", content: userMessage },
    { role: "assistant", content: response },
  ];

  return { text: response, history: newHistory };
}

// Format AI text with markdown-like rendering
export function formatAIText(text) {
  return text.split("\n").map((line, i) => {
    if (line.startsWith("## ")) {
      return { type: "heading", text: line.replace("## ", ""), key: i };
    }
    if (/^[-•]\s/.test(line)) {
      return { type: "bullet", text: line.replace(/^[-•]\s/, ""), key: i };
    }
    if (/^\d+[.)]\s/.test(line)) {
      return { type: "numbered", text: line, key: i };
    }
    if (line.includes("**")) {
      return { type: "bold", text: line, key: i };
    }
    if (line.trim() === "") {
      return { type: "break", key: i };
    }
    return { type: "text", text: line, key: i };
  });
}
