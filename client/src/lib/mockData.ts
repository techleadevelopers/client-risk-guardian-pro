export interface ContentItem {
  id: string;
  type: 'social_post' | 'news_article' | 'deepfake_video' | 'synthetic_audio';
  platform: 'Twitter/X' | 'Facebook' | 'TikTok' | 'Instagram' | 'Web' | 'WhatsApp';
  timestamp: string;
  fakeNewsScore: number; // 0-100
  aiProbability: number; // 0-100
  status: 'analyzing' | 'verified_real' | 'flagged_fake' | 'takedown_issued';
  snippet: string;
  author: string;
  viralityScore: number; // 0-100 (Potential spread)
}

export interface AuditLog {
  id: string;
  timestamp: string;
  action: string;
  user: string;
  targetId: string;
  details: string;
  hash: string;
}

export const mockContent: ContentItem[] = [
  {
    id: 'SOCIAL-2024-8921',
    type: 'social_post',
    platform: 'Twitter/X',
    timestamp: '2024-05-15T10:30:00Z',
    fakeNewsScore: 94,
    aiProbability: 88,
    status: 'flagged_fake',
    snippet: 'BREAKING: Central Bank announces immediate freeze of all savings accounts...',
    author: '@NewsAlert_Real (Bot)',
    viralityScore: 92
  },
  {
    id: 'MEDIA-2024-8922',
    type: 'deepfake_video',
    platform: 'TikTok',
    timestamp: '2024-05-15T10:32:15Z',
    fakeNewsScore: 98,
    aiProbability: 99,
    status: 'takedown_issued',
    snippet: '[Video] President declaring war on neighboring country (Deepfake)',
    author: '@TruthSeeker99',
    viralityScore: 95
  },
  {
    id: 'WEB-2024-8923',
    type: 'news_article',
    platform: 'Web',
    timestamp: '2024-05-15T10:35:00Z',
    fakeNewsScore: 12,
    aiProbability: 5,
    status: 'verified_real',
    snippet: 'Official report on quarterly economic growth released by the ministry...',
    author: 'GovPortal Official',
    viralityScore: 45
  },
  {
    id: 'AUDIO-2024-8924',
    type: 'synthetic_audio',
    platform: 'WhatsApp',
    timestamp: '2024-05-15T10:40:00Z',
    fakeNewsScore: 89,
    aiProbability: 95,
    status: 'flagged_fake',
    snippet: '[Audio] Leaked call of minister admitting to crimes (Voice Cloning detected)',
    author: 'Forwarded Many Times',
    viralityScore: 88
  },
  {
    id: 'SOCIAL-2024-8925',
    type: 'social_post',
    platform: 'Facebook',
    timestamp: '2024-05-15T10:45:00Z',
    fakeNewsScore: 78,
    aiProbability: 92,
    status: 'flagged_fake',
    snippet: 'New miracle cure using bleach approved by health department...',
    author: 'Health Freedom Group',
    viralityScore: 75
  },
];

export const mockAuditLogs: AuditLog[] = [
  {
    id: 'AUD-9921',
    timestamp: '2024-05-15T10:31:00Z',
    action: 'AI_DETECTION_TRIGGER',
    user: 'System (DeepfakeDetector v2)',
    targetId: 'MEDIA-2024-8922',
    details: 'Lip-sync anomaly detected. AI Confidence: 99.2%',
    hash: '0x8f2a1b9c3d4e5f6a7b8c9d0e1f2a3b4c'
  },
  {
    id: 'AUD-9922',
    timestamp: '2024-05-15T10:33:00Z',
    action: 'TAKEDOWN_REQUEST',
    user: 'Auto-Enforcement',
    targetId: 'MEDIA-2024-8922',
    details: 'Sent takedown request to TikTok Trust & Safety API',
    hash: '0x1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d'
  },
  {
    id: 'AUD-9923',
    timestamp: '2024-05-15T10:36:00Z',
    action: 'VERIFICATION_BADGE',
    user: 'System (SourceCheck)',
    targetId: 'WEB-2024-8923',
    details: 'Domain verified against government whitelist.',
    hash: '0x9c8b7a6f5e4d3c2b1a0f9e8d7c6b5a4'
  },
];

export const mockStats = {
  scannedItems: 452100,
  fakeNewsDetected: 12450,
  aiGeneratedContent: 8920,
  takedownsIssued: 342,
  avgAiConfidence: 94.5
};
