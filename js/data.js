const QUESTIONS = [
  {
    id: "q1",
    question: "Who is Jesus?",
    audiences: {
      muslim: {
        strategy: "Clarify that Christians do not believe God physically married Mary. Use the Gospels to establish divinity, as the Quran respects the Injeel.",
        talking_points: [
          "The Quran honors the Injeel (Gospels) — use them as common ground.",
          "John 1:1 and Philippians 2 establish divinity without physical offspring.",
          "Jesus is called the Word of God in both Scripture and Islamic tradition — explore what that means."
        ]
      },
      jw: {
        strategy: "Focus on original Greek manuscripts (like John 1:1) to prove Jesus is Yahweh/God, not Michael the Archangel.",
        talking_points: [
          "ὁ θεὸς vs θεὸς — the definite article distinction in John 1:1 points to Jesus as God.",
          "Thomas's confession: 'My Lord and my God' (John 20:28).",
          "Isaiah 44:24 — Yahweh alone created; Colossians 1:16 — all things created through Christ."
        ]
      },
      mormon: {
        strategy: "Distinguish biblical monotheism from the Mormon godhead model. Jesus is eternally God, not a spirit child who progressed to divinity.",
        talking_points: [
          "Isaiah 43:10 — no gods formed before or after Yahweh.",
          "John 1:1 — the Word was God in the beginning, not became God.",
          "Micah 5:2 — origins from eternity, not from a heavenly council progression."
        ]
      },
      atheist: {
        strategy: "Focus on the historical, non-biblical manuscript evidence that Jesus existed, died by crucifixion, and claimed to be God.",
        talking_points: [
          "Tacitus, Josephus, and early creeds confirm a historical Jesus crucified under Pilate.",
          "The earliest Christian proclamation was resurrection — not myth developed centuries later.",
          "Jesus's self-claims (Mark 14:62, John 8:58) are preserved in sources even skeptics accept."
        ]
      }
    }
  },
  {
    id: "q2",
    question: "Is the Bible reliable?",
    audiences: {
      muslim: {
        strategy: "Acknowledge shared reverence for revelation, then show the New Testament manuscript evidence for reliable transmission of the Injeel.",
        talking_points: [
          "Thousands of early NT manuscripts allow reconstruction with high confidence.",
          "The Quran affirms the Torah and Gospels as revelation — discuss what changed and what didn't.",
          "Oral and written transmission in the 1st century was careful, especially for sacred texts."
        ]
      },
      jw: {
        strategy: "Compare the reliability of the Greek manuscripts used by scholars vs. selective translation choices in the New World Translation.",
        talking_points: [
          "John 1:1, Colossians 1:16-17, and Hebrews 1:8 read clearly in standard Greek texts.",
          "Manuscript families (Alexandrian, Byzantine) agree on core Christology passages.",
          "Ask: should translation follow the weight of manuscript evidence or organizational doctrine?"
        ]
      },
      mormon: {
        strategy: "Establish the Bible's reliability on standard textual grounds first, then discuss whether later revelations contradict or fulfill it.",
        talking_points: [
          "The Bible we have today matches early church citations back to the 2nd century.",
          "Deuteronomy 4:2 and Revelation 22:18 warn against adding to God's word.",
          "Invite comparison: does the Book of Mormon clarify or overturn core biblical claims?"
        ]
      },
      atheist: {
        strategy: "Treat the Bible as ancient literature with a documented textual history — not a single book written at one time.",
        talking_points: [
          "NT manuscript copies outnumber other ancient works by orders of magnitude.",
          "Textual variants are mostly spelling; none overturn core historical claims.",
          "Archaeology and external historians corroborate many biblical people and places."
        ]
      }
    }
  },
  {
    id: "q3",
    question: "What happens when we die?",
    audiences: {
      muslim: {
        strategy: "Find common ground on judgment and resurrection, then present the Christian hope of eternal life through Christ's resurrection.",
        talking_points: [
          "Both traditions affirm a final judgment and bodily resurrection.",
          "Jesus's resurrection is the Christian proof that death is not the end.",
          "John 11:25 — belief in Jesus means life even though one dies."
        ]
      },
      jw: {
        strategy: "Contrast soul sleep / annihilation views with the biblical pattern of conscious presence with Christ and bodily resurrection.",
        talking_points: [
          "Luke 23:43 — Jesus promises the thief paradise that day.",
          "2 Corinthians 5:8 — to be away from the body is to be at home with the Lord.",
          "1 Thessalonians 4:13-18 — believers who have died are with Christ and will rise."
        ]
      },
      mormon: {
        strategy: "Start with resurrection hope shared in common, then clarify the biblical gospel of grace vs. post-mortem progression.",
        talking_points: [
          "Hebrews 9:27 — judgment follows death, not a second chance via proxy ordinances.",
          "Ephesians 2:8-9 — salvation is by grace through faith, not earned in the next life.",
          "1 Corinthians 15 — resurrection body is transformed by Christ, not self-progressed."
        ]
      },
      atheist: {
        strategy: "Address the fear of non-existence honestly, then present the historical case for Jesus's resurrection as evidence for life after death.",
        talking_points: [
          "Near-death experiences don't prove doctrine, but millions report meaning beyond matter.",
          "The resurrection accounts are early, embarrassing, and multiply attested.",
          "If Jesus rose, Christian hope is grounded in an event, not wishful thinking."
        ]
      }
    }
  },
  {
    id: "q4",
    question: "Why does God allow suffering?",
    audiences: {
      muslim: {
        strategy: "Acknowledge God's sovereignty and human responsibility in Islam, then point to the cross as God's personal entry into suffering.",
        talking_points: [
          "The Quran teaches God is merciful and tests believers — suffering is not meaningless.",
          "Christianity claims God did not remain distant: Christ suffered on the cross.",
          "Romans 8:28 — God works even through suffering toward a greater good."
        ]
      },
      jw: {
        strategy: "Engage the theodicy of a loving God amid evil, using Scripture's honest lament and the hope of restoration.",
        talking_points: [
          "Ecclesiastes and Job don't give easy answers — the Bible allows real grief.",
          "Revelation 21:4 — God will wipe away every tear; suffering is not permanent.",
          "Christ's suffering validates that God understands pain firsthand."
        ]
      },
      mormon: {
        strategy: "Discuss agency and the purpose of mortal experience, while centering hope in Christ rather than suffering as progression alone.",
        talking_points: [
          "2 Nephi 2 and Romans 5 both tie suffering to a fallen world and God's plan.",
          "Christ's Atonement addresses sin and suffering, not just eternal progression.",
          "Ask whether suffering is primarily to teach or to be redeemed by grace."
        ]
      },
      atheist: {
        strategy: "Don't dismiss the problem of evil — acknowledge its weight, then explore whether a good God entering suffering changes the calculus.",
        talking_points: [
          "Natural evil and moral evil are serious challenges to any worldview.",
          "Christianity doesn't claim suffering is illusion — Jesus wept at Lazarus's tomb.",
          "The resurrection suggests suffering is real but not the final word."
        ]
      }
    }
  }
];

const AUDIENCE_ORDER = ["muslim", "jw", "mormon", "atheist"];

const AUDIENCE_LABELS = {
  muslim: "Muslim",
  jw: "Jehovah's Witness",
  mormon: "Mormon",
  atheist: "Atheist"
};
