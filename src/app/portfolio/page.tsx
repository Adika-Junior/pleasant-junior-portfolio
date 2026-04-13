import Layout from '@/components/layout/Layout';
import ProjectsSection from '@/components/sections/ProjectsSection';

export default function PortfolioPage() {
  return (
    <Layout>
      <div className="pt-8">
        <ProjectsSection />
      </div>
    </Layout>
  );
}
