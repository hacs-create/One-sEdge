'use client';

import { Users, TrendingUp, Heart, Award, BookOpen, Target, ArrowRight, CheckCircle, Phone, Briefcase, Network, DollarSign, GraduationCap, Rocket, Coffee } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ParallaxImage } from "../components/ParallaxSection";
import Link from "next/link";
import { SplitTextAnimation } from "../components/SplitTextAnimation";

export function RecruitmentPage() {
  const jobDescriptions = [
    {
      icon: Phone,
      title: "携帯ショップ",
      description: "携帯電話の契約変更・機種変更、料金プラン・割引サービスのご案内、接客対応などを担当し、お客さまが快適に携帯電話を使えるようサポートします。",
      details: [
        "契約内容の変更対応",
        "機種変更のサポート",
        "各種事務手続き",
        "料金プラン・割引サービスのご案内",
        "携帯活用方法のアドバイス",
        "お客さま対応・接客"
      ]
    },
    {
      icon: Briefcase,
      title: "家電量販店",
      description: "家電量販店で固定インターネットサービスをお勧めするお仕事です。Wi-Fiや家族割引のメリットをお伝えし、自然と契約に繋がります。充実の研修があるので、初心者でも安心です。",
      details: [
        "固定インターネットサービスの提案",
        "Wi-Fi利用のメリット説明",
        "家族割引サービスのご案内",
        "お客様対応・接客",
        "契約手続きのサポート",
        "充実した研修プログラム"
      ]
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: "少人数でアットホーム",
      description: "風通しの良い環境で、一人ひとりの意見を大切にします。"
    },
    {
      icon: TrendingUp,
      title: "成長の機会",
      description: "独自のキャリアアップカリキュラムで着実にスキルを向上できます。"
    },
    {
      icon: Heart,
      title: "柔軟な働き方",
      description: "ライフスタイルに合わせた勤務スタイルを相談可能です。"
    }
  ];

  const careerPath = [
    {
      phase: "Phase 1",
      title: "研修期間",
      duration: "入社〜3ヶ月",
      description: "通信業界の基礎知識、セールススキル、ビジネスマナーを学びます。",
      details: [
        "業界知識の習得",
        "営業スキルの基礎",
        "先輩社員のOJT研修"
      ]
    },
    {
      phase: "Phase 2",
      title: "実践期間",
      duration: "4ヶ月〜1年",
      description: "実際の営業活動を通じて経験を積み、実績を作ります。",
      details: [
        "固定給+インセンティブ",
        "先輩のサポート付き営業",
        "定期的なフィードバック"
      ]
    },
    {
      phase: "Phase 3",
      title: "キャリアアップ",
      duration: "1年以降",
      description: "歩合制営業へのシフト、または独立支援など、選択肢が広がります。",
      details: [
        "歩合制営業へ移行",
        "独立支援制度の活用",
        "リーダー・管理職への道"
      ]
    }
  ];

  const jobDetails = {
    role: "携帯ショップスタッフ/家電店スタッフ",
    salary: "月給220,000円~",
    workingHours: "10時~19時(出向先の店舗の運営時間に準ずる)",
    holidays: "月21日稼働、週1~2日休み",
    description: "最初は身近な通信業界で、キャリアを積んでいただきます。その後四半期ごとに個別面談を実施し、より上を目指す社員には歩合制度も設けております。歩合制度の場合は時間ではなく成果に対する払い出しの為、勤務時間はフレックスです。"
  };

  const values = [
    {
      icon: Award,
      title: "実力主義",
      description: "学歴や経歴ではなく、実績と努力を正当に評価します。"
    },
    {
      icon: BookOpen,
      title: "教育制度",
      description: "未経験からでも安心して成長できる研修プログラムを用意しています。"
    },
    {
      icon: Target,
      title: "明確なキャリアパス",
      description: "目標に向かって着実にステップアップできる仕組みがあります。"
    }
  ];

  const workingBenefits = [
    {
      icon: Heart,
      title: "頑張った分、お客さまからの\n「ありがとう」の数と収入がアップします",
      description: "お客さまに喜んでいただける接客が、そのまま評価と収入につながります。やりがいと報酬の両方を実感できる仕事です。"
    },
    {
      icon: TrendingUp,
      title: "専門知識がなくても未経験から\n高収入なお仕事",
      description: "充実した研修制度があるので、業界未経験でも安心してスタートできます。しっかり学びながら、高収入を目指せる環境です。"
    }
  ];

  const steps = [
    { id: "jobs", label: "募集職種", title: "Job Positions" },
    { id: "career-path", label: "キャリアパス", title: "Career Path" },
    { id: "benefits", label: "働くメリット", title: "Benefits" },
    { id: "recruitment-info", label: "募集要項", title: "Job Information" },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 sm:py-40 lg:py-48 bg-stone-900 overflow-hidden" data-dark-section="true">
        <div className="absolute inset-0 opacity-30">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1641760378661-6f290a50a62d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBidWlsZGluZyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjI3NTE1MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Recruitment"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-24 h-px bg-gradient-to-r from-[#22c55e]/80 via-[#22c55e]/60 to-transparent mb-8 mx-auto"
            />
            <SplitTextAnimation
              className="text-5xl sm:text-6xl lg:text-7xl mb-6 text-white tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '0.02em' }}
              delay={0.2}
              duration={0.08}
              splitBy="char"
            >
              Careers
            </SplitTextAnimation>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-stone-300 tracking-[0.2em] text-sm sm:text-base"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              採用情報
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 sm:py-32 lg:py-40 bg-diamond-pattern">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-20 h-px bg-gradient-to-r from-[#22c55e] to-transparent mb-8 mx-auto" />
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl mb-12 sm:mb-16 text-center text-stone-900 tracking-tight"
                style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '0.02em' }}
              >
                One's edgeは<br className="sm:hidden" />こんな会社です!
              </h2>
              <div className="space-y-6 text-stone-600 leading-relaxed text-base sm:text-lg text-center" style={{ fontFamily: "'Manrope', sans-serif" }}>
                <p>
                  私たちは、日々仕事を通じてお客様のお役に立てるよう社会の不満やお客様のニーズにアンテナを振り、ビジネスを展開しています。
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Job Descriptions Section */}
      <section id="jobs" className="py-24 sm:py-32 lg:py-40 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-20 h-px bg-gradient-to-r from-[#22c55e] to-transparent mb-8 mx-auto" />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl lg:text-5xl mb-8 text-center text-stone-900 tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '0.02em' }}
          >
            仕事内容
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-stone-600 text-center mb-16 sm:mb-20 leading-relaxed max-w-3xl mx-auto text-base sm:text-lg"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            弊社では、身近な通信業界で、セールスの経験を積んでいます。身近な業界だからこそ、安定した成長を見込んでいます。社内で独自のキャリアアップカリキュラムを用意しており研修を終えキャリアを積んだスタッフは歩合の営業や独立にシフトしていきます。
          </motion.p>

          <div className="max-w-6xl mx-auto space-y-12">
            {jobDescriptions.map((job, index) => {
              const Icon = job.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="border-2 border-stone-200 p-8 sm:p-10 lg:p-12 bg-stone-50 hover:border-[#22c55e] transition-all duration-500"
                >
                  <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                    <div className="lg:w-1/3">
                      <div className="inline-flex items-center justify-center w-16 h-16 mb-6 border-2 border-stone-300 text-stone-700">
                        <Icon className="w-7 h-7" strokeWidth={1.5} />
                      </div>
                      <h3
                        className="text-2xl sm:text-3xl mb-4 text-stone-900"
                        style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '0.02em' }}
                      >
                        {job.title}
                      </h3>
                      <p className="text-stone-600 leading-relaxed text-base sm:text-lg" style={{ fontFamily: "'Manrope', sans-serif" }}>
                        {job.description}
                      </p>
                    </div>
                    <div className="lg:w-2/3">
                      <h4 className="mb-6 text-stone-900 text-lg" style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 600 }}>
                        主な業務内容
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {job.details.map((detail, idx) => (
                          <div key={idx} className="group flex items-start gap-3">
                            <div className="w-6 h-6 border-2 border-stone-300 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:border-[#22c55e] group-hover:bg-[#22c55e] transition-all duration-300">
                              <CheckCircle className="w-4 h-4 text-stone-400 group-hover:text-white transition-colors duration-300" strokeWidth={2} />
                            </div>
                            <p className="text-stone-600" style={{ fontFamily: "'Manrope', sans-serif" }}>
                              {detail}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Working Benefits Section */}
      <section id="benefits" className="py-24 sm:py-32 lg:py-40 bg-diamond-pattern">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-20 h-px bg-gradient-to-r from-[#22c55e] to-transparent mb-8 mx-auto" />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[1.65rem] sm:text-4xl lg:text-5xl mb-8 text-center text-stone-900 tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '0.02em' }}
          >
            One's edgeで働くメリット
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-stone-600 text-center mb-16 sm:mb-20 leading-relaxed max-w-3xl mx-auto text-base sm:text-lg"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            私たちは、一人ひとりが成長し、活躍できる環境づくりに力を入れています。
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
            {workingBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  className="group border-2 border-stone-200 p-8 sm:p-10 lg:p-12 bg-white hover:border-[#22c55e] hover:bg-stone-50 transition-all duration-500 text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-8 border-2 border-stone-300 text-stone-700 group-hover:border-[#22c55e] group-hover:bg-[#22c55e] transition-all duration-500">
                    <Icon className="w-7 h-7 group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                  </div>
                  <h3
                    className="text-lg sm:text-2xl mb-6 text-stone-900 whitespace-pre-line"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {benefit.title}
                  </h3>
                  <p className="text-stone-600 leading-relaxed text-base sm:text-lg" style={{ fontFamily: "'Manrope', sans-serif" }}>
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Job Positions */}
      <section id="recruitment-info" className="py-24 sm:py-32 lg:py-40 bg-diamond-pattern">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-20 h-px bg-gradient-to-r from-[#22c55e] to-transparent mb-8 mx-auto" />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl lg:text-5xl mb-16 sm:mb-20 text-center text-stone-900 tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '0.02em' }}
          >
            募集要項
          </motion.h2>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="border-2 border-stone-200 p-8 sm:p-10 lg:p-12 bg-white"
            >
              <div className="space-y-8">
                <div className="border-b-2 border-stone-200 pb-6">
                  <h4 className="mb-3 text-stone-500 text-sm tracking-wider" style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 600 }}>業務内容</h4>
                  <p className="text-stone-900 text-lg sm:text-xl" style={{ fontFamily: "'Manrope', sans-serif" }}>
                    {jobDetails.role}
                  </p>
                </div>

                <div className="border-b-2 border-stone-200 pb-6">
                  <h4 className="mb-3 text-stone-500 text-sm tracking-wider" style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 600 }}>給与</h4>
                  <p className="text-stone-900 text-lg sm:text-xl" style={{ fontFamily: "'Manrope', sans-serif" }}>
                    {jobDetails.salary}
                  </p>
                </div>

                <div className="border-b-2 border-stone-200 pb-6">
                  <h4 className="mb-3 text-stone-500 text-sm tracking-wider" style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 600 }}>時間</h4>
                  <p className="text-stone-900 text-base sm:text-lg" style={{ fontFamily: "'Manrope', sans-serif" }}>
                    {jobDetails.workingHours}
                  </p>
                </div>

                <div className="border-b-2 border-stone-200 pb-6">
                  <h4 className="mb-3 text-stone-500 text-sm tracking-wider" style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 600 }}>休み</h4>
                  <p className="text-stone-900 text-base sm:text-lg" style={{ fontFamily: "'Manrope', sans-serif" }}>
                    {jobDetails.holidays}
                  </p>
                </div>

                <div className="bg-stone-50 p-6 sm:p-8 border-2 border-stone-200">
                  <p className="text-stone-700 leading-relaxed text-base sm:text-lg" style={{ fontFamily: "'Manrope', sans-serif" }}>
                    {jobDetails.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Message to Candidates */}
      <section className="py-24 sm:py-32 lg:py-40 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="border-2 border-stone-200 bg-stone-50 p-8 sm:p-12 lg:p-16">
              <div className="space-y-6 text-stone-700 leading-relaxed text-base sm:text-lg" style={{ fontFamily: "'Manrope', sans-serif" }}>
                <p>学歴はないけれど、やる気と責任感は誰にも負けない。</p>
                <p>今より成長し、同年代よりも高い給与ややりがいが欲しい。</p>
                <p>でも、どんな会社に転職をしたら良いかわからない。</p>
                <p className="mt-8 text-stone-900 text-xl sm:text-2xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                  そんな方はぜひ弊社で一緒に働きませんか?
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
