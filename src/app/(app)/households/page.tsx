'use client';

import { useState } from 'react';
import { House, Plus, Users, ArrowRight, X, UserPlus} from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';

export default function HouseholdsPage() {
  const [activeDialog, setActiveDialog] = useState<'create' | 'join' | null>(null);
  const [householdName, setHouseholdName] = useState('');
  const [inviteCode, setInviteCode] = useState('');

  return (
    <div className="min-h-screen bg-background px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-2xl font-semibold tracking-tight">
            Households
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Manage your household and stay connected.
          </p>
        </div>

        {/* Empty State */}
        <div className="flex min-h-[420px] flex-col items-center justify-center rounded-2xl border bg-card px-6 py-12 text-center">

          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10">
            <House className="h-10 w-10 text-primary" />
          </div>

          <h2 className="text-xl font-semibold">
            No household yet
          </h2>

          <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">
            Create your own household or join an existing one
            using an invitation code to get started.
          </p>

          <div className="mt-8 flex w-full max-w-sm flex-col gap-3 sm:flex-row">

            <Button
              variant={'primary'}
              onClick={() => setActiveDialog('create')}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium border text-primary-foreground transition hover:text-white hover:opacity-60"
            >
              <Plus size={18} />
              Create household
            </Button>

            <Button
                variant={'secondary'}
              onClick={() => setActiveDialog('join')}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-border bg-background px-5 py-3 text-sm font-medium transition hover:text-white hover:bg-black/60"
            >
              <Users size={18} />
              Join household
            </Button>

          </div>
        </div>

        {/* Create / Join Dialog */}
        {activeDialog && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/50 px-4 backdrop-blur-sm">

            <div className="relative w-full max-w-md rounded-2xl border border-border bg-card p-6 shadow-xl">

              <Button
                onClick={() => setActiveDialog(null)}
                className="absolute right-4 top-4 rounded-lg p-2 text-muted-foreground hover:bg-muted"
              >
                <X size={18} />
              </Button>

              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                {activeDialog === 'create' ? (
                  <House className="text-primary" size={23} />
                ) : (
                  <UserPlus className="text-primary" size={23} />
                )}
              </div>

              <h2 className="text-xl font-semibold">
                {activeDialog === 'create'
                  ? 'Create household'
                  : 'Join household'}
              </h2>

              <p className="mt-2 text-sm text-muted-foreground">
                {activeDialog === 'create'
                  ? 'Give your household a name to get started.'
                  : 'Enter the invitation code shared with you.'}
              </p>

              <div className="mt-6">
                <label className="mb-2 block text-sm font-medium">
                  {activeDialog === 'create'
                    ? 'Household name'
                    : 'Invitation code'}
                </label>

                <Input
                  type="text"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  value={
                    activeDialog === 'create'
                      ? householdName
                      : inviteCode
                  }
                  onChange={(e) =>
                    activeDialog === 'create'
                      ? setHouseholdName(e.target.value)
                      : setInviteCode(e.target.value)
                  }
                  placeholder={
                    activeDialog === 'create'
                      ? 'e.g. Xyz Family'
                      : 'Enter your invite code'
                  }
                />
              </div>

              <Button
                disabled={
                  activeDialog === 'create'
                    ? !householdName.trim()
                    : !inviteCode.trim()
                }
                onClick={() => {
                  // UI only: API integration later
                  setActiveDialog(null);
                }}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:text-white hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {activeDialog === 'create'
                  ? 'Create household'
                  : 'Join household'}
                <ArrowRight size={17} />
              </Button>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}
