# QuotesMill Content Security & Privacy Rules

## Overview
This document outlines the content security restrictions applied throughout the QuotesMill website. These rules ensure no sensitive technical or operational information is exposed to customers or competitors.

## Content Restrictions Applied

### 1. No AI/ML Model Names
❌ **FORBIDDEN:**
- ChatGPT, GPT-4, Claude, LLaMA
- "Powered by OpenAI"
- "Uses machine learning from [provider]"
- Any specific model identifiers

✔ **ALLOWED:**
- "AI-powered"
- "Intelligent parsing"
- "Automatic understanding"
- "Smart system"

---

### 2. No Backend Technology Names
❌ **FORBIDDEN:**
- Node.js, Python, Go, Java
- Express, Django, FastAPI
- React, Vue, Angular
- Kubernetes, Docker mentions
- Database names (PostgreSQL, MongoDB, Redis)
- Queue systems (Bull, RabbitMQ, AWS SQS)

✔ **ALLOWED:**
- "Robust backend"
- "Scalable infrastructure"
- "Enterprise-grade system"
- "Reliable processing"

---

### 3. No Cloud Provider References
❌ **FORBIDDEN:**
- AWS, Azure, Google Cloud mentions
- S3, Lambda, EC2, CloudWatch
- Firebase, Vercel infrastructure mentions
- Any cloud-specific service names
- Pricing tiers (t2.micro, etc.)

✔ **ALLOWED:**
- "Cloud-hosted"
- "Global servers"
- "Distributed infrastructure"
- "Secure cloud storage"

---

### 4. No Architecture Exposure
❌ **FORBIDDEN:**
- Microservices breakdown
- API endpoint details
- Database schema hints
- Server topology
- Load balancer configurations
- Caching strategy details

✔ **ALLOWED:**
- "Optimized architecture"
- "Efficient processing"
- "Redundant systems"
- "High-availability design"

---

### 5. No Competitor Tech Details
❌ **FORBIDDEN:**
- "Unlike [Company] which uses..."
- Comparing our tech vs their tech
- Technical advantages over specific competitors
- Exposing their technology stack
- Performance comparisons with specifics

✔ **ALLOWED:**
- "Unlike traditional solutions"
- "Better than manual processes"
- "Faster quotation generation"
- Generic benefits without technical details

---

### 6. No False Compliance Claims
❌ **FORBIDDEN:**
- "SOC 2 certified" (without actual certification)
- "ISO 27001 compliant" (without audit)
- "GDPR compliant" (without legal review)
- "PCI DSS certified" (without validation)
- Made-up security certifications

✔ **ALLOWED:**
- "Enterprise-grade security"
- "Encrypted data storage"
- "Secure data handling"
- "Privacy-focused approach"
- "Data protection measures" (after legal review)

---

### 7. No Fake Metrics or Claims
❌ **FORBIDDEN:**
- "Generated 100K+ quotes"
- "2.3 second average generation time"
- "99% accuracy rate"
- "10,000+ active users"
- "₹500Cr in transactions processed"
- Any unverified statistics

✔ **ALLOWED:**
- "Built for Indian manufacturers"
- "Fast quotation generation"
- "Accurate parsing"
- "Reliable system"
- "Growing customer base"

---

### 8. No Pricing Deception
❌ **FORBIDDEN:**
- "Start Free" or "Free Trial" buttons
- Hidden pricing anywhere
- "Free forever" claims
- Fake free tiers
- Misleading cost structures

✔ **ALLOWED:**
- "Early Access" (for actual early access users)
- Transparent future pricing (after decisions made)
- "Contact us for pricing"
- Honest value proposition

---

## Enforcement Checklist

Before deploying any content, verify:

- [ ] No AI model names mentioned
- [ ] No backend tech stack exposed
- [ ] No cloud provider references
- [ ] No architecture details visible
- [ ] No competitor tech comparisons
- [ ] No false compliance claims
- [ ] No fake metrics or statistics
- [ ] No "Free Trial" CTAs
- [ ] No pricing deception
- [ ] All Hindi/Hinglish copy is accurate and respectful
- [ ] Mobile-first design verified
- [ ] WhatsApp CTAs are accurate and working

---

## Examples of Compliant Copy

### ❌ INCORRECT:
"Our AI (powered by GPT-4) running on AWS Lambda generates quotes in 2.3 seconds with 99% accuracy. SOC 2 Type II certified. Join 50,000+ companies. Start your free trial today!"

### ✔ CORRECT:
"QuotesMill uses intelligent parsing to understand your inquiries and generate professional quotations within minutes. Built for Indian manufacturers earning ₹1Cr–5Cr annually. Get early access via WhatsApp today."

---

## Review Process

All copy changes must pass:
1. **Content Security Check** - Against restrictions above
2. **Hindi/Hinglish Review** - Native speaker validation
3. **Mobile Testing** - Responsive design verification
4. **WhatsApp Link Testing** - All CTAs functional
5. **Legal Review** - For any compliance claims

---

## Last Updated
March 2026

## Responsibility
All team members are responsible for maintaining these standards. Security violations must be reported and corrected immediately.
