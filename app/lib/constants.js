// NeuroBridge Constants & Configuration

export const DISCORD_LINK = "https://discord.gg/neurobridge";

export const SYS_PROMPT = `You are NeuroBridge AI — a clinical ADHD screening assistant. NOT a doctor, CANNOT diagnose.
RULES: 1)Never diagnose. Say "your responses suggest alignment with ADHD traits" not "you have ADHD." 2)Never validate vague inputs—probe for specifics: frequency, duration, impact, age of onset. 3)Require functional impairment in 2+ life domains. 4)Check onset before age 12. 5)Detect inconsistencies — perfect academics + recent focus issues may be burnout/anxiety. 6)Flag non-ADHD patterns (autism, anxiety, depression, sleep) and recommend broader assessment. 7)Reject irrelevant inputs, redirect gently. 8)No emoji or unicode symbols.
FRAMEWORK (Adaptive, ASRS-v1.1 & DSM-5-TR): Phase 1 (5-8 Qs): Inattention, Hyperactivity/Impulsivity, Onset & Duration. Phase 2 (if 3+ indicators): Functional Impairment, Differential Screening, Strengths & Coping.
Ask ONE question at a time. Warm but precise. Mirror user language. Explain WHY you ask things. Start by welcoming, explaining the 5-15 min process, and asking the first question naturally.`;

export const REPORT_PROMPT = `Generate a structured ADHD screening report. Format with these EXACT sections using ## headings:

## Overview
A 2-3 sentence summary of the screening.

## Domain Scores
Rate each domain on a scale: Low / Moderate / Notable alignment. Include a numeric score out of 100.
- Inattention: [score]/100 [rating] - [1 sentence finding]
- Hyperactivity/Impulsivity: [score]/100 [rating] - [1 sentence finding]
- Onset & Duration: [score]/100 [rating] - [1 sentence finding]
- Executive Function: [score]/100 [rating] - [1 sentence finding]
- Emotional Regulation: [score]/100 [rating] - [1 sentence finding]
- Working Memory: [score]/100 [rating] - [1 sentence finding]

## Key Patterns Identified
3-5 bullet points of specific patterns.

## Additional Concerns
Any non-ADHD flags (anxiety, sleep, autism traits, etc.)

## Detailed Analysis
4-6 paragraphs connecting patterns across domains.

## Recommendations
Specific next steps.

## Disclaimer
This is not a medical diagnosis. Only a licensed professional can diagnose ADHD.

No emoji. Be thorough and clinical but accessible.`;

export const MOCK_REPORT = {
  user: { name: "Arjun", date: "5 April 2026" },
  overall: "Moderate-to-Notable",
  overallDesc: "Your responses indicate a consistent pattern of traits that align moderately to notably with ADHD-Inattentive presentation. Several domains show meaningful indicators that warrant professional evaluation.",
  domains: [
    { name: "Inattention", score: 78, level: "Notable", color: "#FF6B9D", desc: "Significant difficulty sustaining focus on tasks, frequent mind-wandering, and challenges following through on instructions.", detail: "Your responses consistently described difficulty maintaining attention across multiple contexts — work meetings, reading, and conversations. The pattern of starting tasks with enthusiasm but struggling to complete them, combined with frequent mental drift even during engaging activities, is a hallmark inattention signature." },
    { name: "Hyperactivity", score: 42, level: "Low-Moderate", color: "#2DFDC1", desc: "Some restlessness reported, primarily internal. You feel mentally 'buzzing' rather than physically hyperactive.", detail: "While you don't exhibit classic physical hyperactivity, you described persistent internal restlessness — a mind that won't settle. This 'hyperactivity of thought' is common in adults and often overlooked because it doesn't manifest as visible movement." },
    { name: "Impulsivity", score: 55, level: "Moderate", color: "#FFD93D", desc: "Moderate impulsive tendencies — interrupting in conversations, impulsive purchases, and difficulty waiting.", detail: "Your impulsivity manifests primarily in verbal interruptions and spontaneous decision-making. The pattern of making purchases without planning, blurting out responses before questions are finished, and experiencing sudden intense emotional reactions suggests moderate impulsive traits." },
    { name: "Executive Function", score: 82, level: "Notable", color: "#FF6B9D", desc: "Significant challenges with time management, organization, and prioritization. Chronic difficulty with deadlines.", detail: "Executive function difficulties are among your strongest indicators. Time blindness — the inability to accurately perceive or manage time — was a recurring theme. You described deadline crises, disorganized living spaces, and difficulty breaking large tasks into manageable steps." },
    { name: "Emotional Regulation", score: 65, level: "Moderate", color: "#FFD93D", desc: "Heightened emotional responses, particularly to perceived criticism. Rapid mood shifts and lower frustration tolerance.", detail: "Rejection Sensitive Dysphoria (RSD) indicators were present. You described disproportionately strong reactions to perceived criticism or exclusion, rapid mood shifts, and a tendency to internalize negative feedback deeply." },
    { name: "Working Memory", score: 71, level: "Notable", color: "#FF6B9D", desc: "Frequently forgetting why you walked into a room, losing track of multi-step instructions, struggling to hold information.", detail: "Working memory challenges were evident across multiple life areas. Forgetting items from short mental lists, losing the thread of multi-step instructions, and the 'doorway effect' all point to working memory as a significant area of difficulty." },
  ],
  patterns: [
    "Consistent childhood onset — similar patterns described as early as age 8-9, particularly in academic settings.",
    "Time blindness emerged as a central theme — affecting work deadlines, social commitments, and daily routines.",
    "Hyperfocus ability is present — deep attention on novel or high-interest tasks contrasts sharply with inattention elsewhere.",
    "Compensatory strategies are well-developed — lists, alarms, and routines have partially masked underlying difficulties.",
    "Sleep-onset difficulties correlate with the pattern — racing thoughts at bedtime align with internal hyperactivity.",
  ],
  flags: [
    { label: "Anxiety overlap", desc: "Some responses suggest generalized anxiety may be amplifying focus difficulties. A specialist should differentiate between primary ADHD inattention and anxiety-driven concentration issues." },
    { label: "Sleep quality", desc: "Poor sleep onset and inconsistent sleep patterns were reported. Sleep disorders can mimic ADHD symptoms and should be evaluated independently." },
  ],
  recommendations: [
    "Seek a formal clinical evaluation with a neuropsychologist or psychiatrist experienced in adult ADHD.",
    "Share this report with your clinician — it provides a structured pre-assessment that can accelerate diagnosis.",
    "Track your symptoms daily for 2 weeks before your appointment using a journal or app like Daylio.",
    "Join the NeuroBridge community on Discord to connect with others navigating similar experiences.",
    "Investigate workplace accommodations that might support your executive function challenges.",
  ],
};
