import Layout from '@/components/layout/Layout';
import ContactSection from '@/components/sections/ContactSection';

export const metadata = {
  title: 'Contact — Pleasant Junior',
  description: 'Get in touch with Pleasant Junior for projects, collaborations, or opportunities.'
};

export default function ContactPage() {
  return (
    <Layout>
      <ContactSection />
    </Layout>
  );
}
