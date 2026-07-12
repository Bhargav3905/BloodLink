import { useState } from 'react';

import { Button } from '../components/ui/button';
import {
  Input,
  FormField,
} from '../components/ui/input';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import Modal from '../components/ui/modal/Modal';

import {
  Loader,
  ButtonLoader,
  OverlayLoader,
} from '../components/feedback/loader';

import {
  Skeleton,
  SkeletonCard,
  SkeletonDashboard,
  SkeletonProfile,
  SkeletonTable,
} from '../components/feedback/skeleton';

import EmptyState from '../components/feedback/empty-state/EmptyState';
import ConfirmationDialog from '../components/feedback/confirmation-dialog/ConfirmationDialog';

import ThemeToggle from '../components/shared/theme-toggle/ThemeToggle';
import PageHeader from '../components/shared/page-header/PageHeader';

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);
  const [overlay, setOverlay] = useState(false);

  return (
    <div className="min-h-screen bg-slate-100 p-8 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl space-y-12">
        {/* Page Header */}
        <PageHeader
          title="BloodLink UI Library"
          description="Sprint 1C Component Testing"
          action={<ThemeToggle />}
        />

        {/* Buttons */}
        <Card>
          <CardHeader>
            <CardTitle>Buttons</CardTitle>
          </CardHeader>

          <CardContent className="flex flex-wrap gap-4">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="success">Success</Button>
            <Button variant="warning">Warning</Button>
            <Button variant="danger">Danger</Button>

            <Button disabled>Disabled</Button>

            <Button className="gap-2">
              <ButtonLoader />
              Saving...
            </Button>
          </CardContent>
        </Card>

        {/* Badges */}
        <Card>
          <CardHeader>
            <CardTitle>Badges</CardTitle>
          </CardHeader>

          <CardContent className="flex flex-wrap gap-3">
            <Badge>Default</Badge>
            <Badge variant="success">Approved</Badge>
            <Badge variant="warning">Pending</Badge>
            <Badge variant="danger">Rejected</Badge>
            <Badge variant="info">Information</Badge>
          </CardContent>
        </Card>

        {/* Form */}
        <Card>
          <CardHeader>
            <CardTitle>Form Components</CardTitle>
            <CardDescription>Input & FormField</CardDescription>
          </CardHeader>

          <CardContent className="space-y-5">
            <FormField
              label="Email"
              placeholder="Enter your email"
              required
            />

            <FormField
              label="Password"
              type="password"
              placeholder="Enter your password"
            />

            <FormField
              label="Error Example"
              error="This field is required"
            />

            <Input placeholder="Standalone Input" />
          </CardContent>

          <CardFooter>
            <Button>Submit</Button>
          </CardFooter>
        </Card>

        {/* Loader */}
        <Card className="relative">
          <CardHeader>
            <CardTitle>Loaders</CardTitle>
          </CardHeader>

          <CardContent className="flex items-center gap-6">
            <Loader size="sm" />
            <Loader />
            <Loader size="lg" />

            <Button
              variant="outline"
              onClick={() => setOverlay(!overlay)}
            >
              Toggle Overlay
            </Button>
          </CardContent>

          {overlay && <OverlayLoader />}
        </Card>

        {/* Skeleton */}
        <Card>
          <CardHeader>
            <CardTitle>Skeletons</CardTitle>
          </CardHeader>

          <CardContent className="space-y-8">
            <Skeleton className="h-10 w-56" />

            <SkeletonCard />

            <SkeletonProfile />

            <SkeletonTable />

            <SkeletonDashboard />
          </CardContent>
        </Card>

        {/* Empty State */}
        <EmptyState
          title="No Blood Requests"
          description="There are currently no blood requests."
          action={<Button>Create Request</Button>}
        />

        {/* Modal Testing */}
        <div className="flex gap-4">
          <Button onClick={() => setOpenModal(true)}>
            Open Modal
          </Button>

          <Button
            variant="danger"
            onClick={() => setOpenConfirm(true)}
          >
            Open Confirmation
          </Button>
        </div>

        <Modal
          open={openModal}
          title="BloodLink Modal"
          onClose={() => setOpenModal(false)}
        >
          <p className="mb-5">
            This is a reusable modal component.
          </p>

          <Button onClick={() => setOpenModal(false)}>
            Close
          </Button>
        </Modal>

        <ConfirmationDialog
          open={openConfirm}
          title="Delete Request"
          description="Are you sure you want to delete this request?"
          onCancel={() => setOpenConfirm(false)}
          onConfirm={() => {
            alert('Confirmed');
            setOpenConfirm(false);
          }}
        />
      </div>
    </div>
  );
};

export default Home;