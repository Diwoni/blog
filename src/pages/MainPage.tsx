import { useParallax } from '@/shared/hooks';
import { Header } from '@/shared/ui';
import { Card } from '@/shared/ui';
import { FadeInSection } from '@/shared/ui/FadeInSection';
export const MainPage = () => {
  useParallax();

  return (
    <main className="w-full bg-amber-50">
      <Header />
      <section className="relative h-screen overflow-hidden">
        {/* 패럴럭스 배경 */}
        <div
          className="absolute top-0 left-0 w-full h-[100%] bg-cover bg-center parallax-bg"
          style={{ backgroundImage: "url('/backimage.webp')" }}
          data-speed="0.3"
        ></div>

        {/* 콘텐츠 */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
          <h1 className="text-5xl font-bold mb-4 drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)]">
            여행의 모든 것
          </h1>
          <p className="text-3xl font-medium drop-shadow-[0_2px_6px_rgba(0,0,0,0.3)]">
            AI와 함께 여행을 준비해요
          </p>
          <div className="mt-8 w-[300px] h-[46px] flex justify-center gap-2">
            <button className="w-full px-6 py-3 bg-gray-800/90 text-white rounded-lg font-semibold hover:bg-gray-900 transition">
              로그인
            </button>
            <button className="w-full px-6 py-3 bg-gray-800/90 text-white rounded-lg font-semibold hover:bg-gray-900 transition">
              회원가입
            </button>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-20 flex items-center justify-center gap-8 flex-wrap">
        <Card
          title="여행 메이트를 찾아보세요"
          content="혼자라면 친구를, 친구라면 더 많은 모험을 함께할 수 있어요."
        />
        <Card
          title="일정을 스마트하게"
          content="AI가 추천하고, 지도로 동선까지 관리해보세요."
        />
        <Card
          title="친구와 공유해요"
          content="링크만 보내면 실시간으로 일정을 같이 볼 수 있어요."
        />
      </section>
      {/* 기능 강조 섹션 */}
      <section
        className="bg-white py-50 px-6 bg-cover bg-center"
        style={{ backgroundImage: "url('/sec2.webp')" }}
      >
        <FadeInSection>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              나만의 여행을, AI와 함께
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              트립팔은 여행의 시작부터 끝까지 함께합니다.{' '}
              <p>계획, 동선, 메이트까지 한 곳에서 간편하게 해결하세요.</p>
            </p>
          </div>
        </FadeInSection>
      </section>

      {/* CTA (Call to Action) */}
      <section className="bg-primary/10 py-28 px-6">
        <FadeInSection>
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4 text-gray-800">
              지금 바로 여행을 시작해보세요
            </h3>
            <p className="text-md text-gray-600 mb-8">
              로그인하고 여행 계획을 세워보세요. 친구도 초대할 수 있어요.
            </p>
            <div className="flex justify-center gap-4">
              <button className="px-8 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition">
                시작하기
              </button>
              <button className="px-8 py-3 border border-gray-400 rounded-full text-gray-700 font-medium hover:bg-gray-100 transition">
                더 알아보기
              </button>
            </div>
          </div>
        </FadeInSection>
      </section>
    </main>
  );
};
