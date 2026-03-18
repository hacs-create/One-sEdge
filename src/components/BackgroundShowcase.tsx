'use client';

/**
 * 背景デザインパターンのショーケース
 * このコンポーネントは、利用可能な背景パターンを視覚的に確認するためのものです。
 * 実際のプロダクションでは使用せず、デザイン選択のためのリファレンスとしてご利用ください。
 */

export function BackgroundShowcase() {
  const patterns = [
    {
      name: "微細なドットパターン",
      className: "bg-elegant-dots",
      description: "控えめで洗練された印象。あらゆるセクションに適用可能。",
      useCase: "会社概要、事業内容セクションに最適"
    },
    {
      name: "洗練されたグリッドパターン",
      className: "bg-refined-grid",
      description: "構造的で整理された印象。プロフェッショナルな雰囲気。",
      useCase: "サービス一覧、組織図セクションに最適"
    },
    {
      name: "ダイヤモンドパターン",
      className: "bg-diamond-pattern",
      description: "ロゴの69デザインと統一感のある幾何学模様。モバイル最適化済み。",
      useCase: "ブランドアイデンティティを強調したいセクションに（推奨）"
    },
    {
      name: "プレミアムグラデーション",
      className: "bg-premium-gradient",
      description: "微細なノイズテクスチャで高級感を演出。",
      useCase: "ヒーローセクション、重要なCTAエリアに"
    },
    {
      name: "波状パターン",
      className: "bg-wave-pattern",
      description: "流動的でエレガント。動きと柔らかさを表現。",
      useCase: "採用情報、お問い合わせセクションに"
    },
  ];

  const darkPatterns = [
    {
      name: "ダークドットパターン",
      className: "bg-dark-elegant-dots",
      description: "暗い背景に微細なドット。洗練されたナイトモード。",
      useCase: "フッター、ダークセクションに最適"
    },
    {
      name: "ダークグリッドパターン",
      className: "bg-dark-refined-grid",
      description: "暗い背景に控えめなグリッド線。モダンな印象。",
      useCase: "ダークテーマのコンテンツエリアに"
    },
  ];

  const effects = [
    {
      name: "シマーエフェクト",
      className: "shimmer-effect bg-stone-100",
      description: "微妙な光の動きでプレミアム感を演出。",
      useCase: "カードやCTAボタンに適用"
    },
    {
      name: "テクスチャオーバーレイ",
      className: "texture-overlay bg-white",
      description: "紙のような質感で温かみのある印象。",
      useCase: "コンテンツボックスに適用"
    },
    {
      name: "グラスモーフィズム",
      className: "glass-effect",
      description: "モダンで透明感のあるデザイン。",
      useCase: "モーダル、フローティングカードに"
    },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-16">
        <h1 
          className="text-4xl sm:text-5xl mb-4 text-stone-900"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          背景デザインパターン
        </h1>
        <p 
          className="text-stone-600 text-lg"
          style={{ fontFamily: "'Manrope', sans-serif" }}
        >
          エレガント&ラグジュアリーなデザインに適した背景パターン集
        </p>
      </div>

      {/* Light Backgrounds */}
      <section className="mb-16">
        <h2 
          className="text-3xl mb-8 text-stone-900"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          ライト背景パターン
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {patterns.map((pattern, index) => (
            <div 
              key={index}
              className="border-2 border-stone-200 overflow-hidden"
            >
              <div className={`${pattern.className} h-48 border-b-2 border-stone-200 relative`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span 
                    className="bg-white/90 px-6 py-3 text-stone-900 backdrop-blur-sm"
                    style={{ fontFamily: "'Manrope', sans-serif" }}
                  >
                    プレビュー
                  </span>
                </div>
              </div>
              <div className="p-6 bg-white">
                <h3 
                  className="text-xl mb-2 text-stone-900"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {pattern.name}
                </h3>
                <p 
                  className="text-stone-600 text-sm mb-3"
                  style={{ fontFamily: "'Manrope', sans-serif" }}
                >
                  {pattern.description}
                </p>
                <p 
                  className="text-[#22c55e] text-xs"
                  style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 600 }}
                >
                  {pattern.useCase}
                </p>
                <code className="block mt-3 text-xs bg-stone-100 p-2 rounded text-stone-700">
                  className="{pattern.className}"
                </code>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Dark Backgrounds */}
      <section className="mb-16">
        <h2 
          className="text-3xl mb-8 text-stone-900"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          ダーク背景パターン
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {darkPatterns.map((pattern, index) => (
            <div 
              key={index}
              className="border-2 border-stone-200 overflow-hidden"
            >
              <div className={`${pattern.className} h-48 border-b-2 border-stone-700 relative`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span 
                    className="bg-stone-900/90 px-6 py-3 text-white backdrop-blur-sm"
                    style={{ fontFamily: "'Manrope', sans-serif" }}
                  >
                    プレビュー
                  </span>
                </div>
              </div>
              <div className="p-6 bg-white">
                <h3 
                  className="text-xl mb-2 text-stone-900"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {pattern.name}
                </h3>
                <p 
                  className="text-stone-600 text-sm mb-3"
                  style={{ fontFamily: "'Manrope', sans-serif" }}
                >
                  {pattern.description}
                </p>
                <p 
                  className="text-[#22c55e] text-xs"
                  style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 600 }}
                >
                  {pattern.useCase}
                </p>
                <code className="block mt-3 text-xs bg-stone-100 p-2 rounded text-stone-700">
                  className="{pattern.className}"
                </code>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Special Effects */}
      <section className="mb-16">
        <h2 
          className="text-3xl mb-8 text-stone-900"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          特殊エフェクト
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {effects.map((effect, index) => (
            <div 
              key={index}
              className="border-2 border-stone-200 overflow-hidden"
            >
              <div className={`${effect.className} h-48 border-b-2 border-stone-200 relative`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span 
                    className="bg-white/90 px-6 py-3 text-stone-900 backdrop-blur-sm"
                    style={{ fontFamily: "'Manrope', sans-serif" }}
                  >
                    エフェクト
                  </span>
                </div>
              </div>
              <div className="p-6 bg-white">
                <h3 
                  className="text-xl mb-2 text-stone-900"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {effect.name}
                </h3>
                <p 
                  className="text-stone-600 text-sm mb-3"
                  style={{ fontFamily: "'Manrope', sans-serif" }}
                >
                  {effect.description}
                </p>
                <p 
                  className="text-[#22c55e] text-xs"
                  style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 600 }}
                >
                  {effect.useCase}
                </p>
                <code className="block mt-3 text-xs bg-stone-100 p-2 rounded text-stone-700">
                  className="{effect.className}"
                </code>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Usage Examples */}
      <section className="mb-16 border-2 border-stone-200 p-8 bg-stone-50">
        <h2 
          className="text-3xl mb-6 text-stone-900"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          使用方法
        </h2>
        <div className="space-y-4 text-stone-700" style={{ fontFamily: "'Manrope', sans-serif" }}>
          <p>これらの背景パターンは、既存のクラスに追加するだけで簡単に適用できます：</p>
          
          <div className="bg-white p-4 rounded border border-stone-200">
            <code className="text-sm text-stone-800">
              {'<section className="py-24 bg-stone-50 bg-elegant-dots">'}
              <br />
              {'  {/* コンテンツ */}'}
              <br />
              {'</section>'}
            </code>
          </div>

          <p className="mt-6">複数の効果を組み合わせることも可能です：</p>
          
          <div className="bg-white p-4 rounded border border-stone-200">
            <code className="text-sm text-stone-800">
              {'<div className="bg-elegant-dots shimmer-effect">'}
              <br />
              {'  {/* エレガントなドットパターン + 光沢効果 */}'}
              <br />
              {'</div>'}
            </code>
          </div>
        </div>
      </section>

      {/* Recommendations */}
      <section className="bg-[#22c55e] text-white p-8 rounded-lg">
        <h2 
          className="text-3xl mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          推奨事項
        </h2>
        <ul className="space-y-3" style={{ fontFamily: "'Manrope', sans-serif" }}>
          <li className="flex items-start">
            <span className="mr-2">✓</span>
            <span>パターンは控えめに使用し、コンテンツの可読性を優先してください</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">✓</span>
            <span>隣接するセクションで異なるパターンを使用することで、視覚的な区別を作ります</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">✓</span>
            <span>重要なコンテンツエリアには、よりシンプルな背景を選択してください</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">✓</span>
            <span>すべてのパターンはレスポンシブ対応済み（デスクトップ、タブレット、モバイル）</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">✓</span>
            <span>高解像度ディスプレイ（Retina等）でより鮮明に表示されるよう最適化されています</span>
          </li>
        </ul>
      </section>
    </div>
  );
}
