# HOW TO MAKE ALERT IDs CLICKABLE

## Step 1: Update Alert Queue HTML

In `alert-queue.component.html`, find the Alert ID cell and make it clickable:

**FIND THIS:**
```html
<td class="alert-id">{{ alert.alertId }}</td>
```

**REPLACE WITH:**
```html
<td class="alert-id">
  <a class="alert-link" [routerLink]="['/alert', alert.alertId]">
    {{ alert.alertId }}
  </a>
</td>
```

## Step 2: Add CSS for Clickable Links

In `alert-queue.component.scss`, add these styles:

```scss
.alert-id {
  font-family: monospace;
  font-weight: 600;
  
  .alert-link {
    color: #7b2fbe;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.2s;
    padding: 4px 8px;
    border-radius: 4px;
    display: inline-block;

    &:hover {
      background: #f3e5f6;
      color: #4a0d8f;
      text-decoration: underline;
    }
  }
}
```

## Step 3: Create Component Directory

Create folder: `src/app/components/alert-detail/`

Place these 3 files inside:
- alert-detail.component.ts
- alert-detail.component.html
- alert-detail.component.scss

## Step 4: Update Routes

Replace `src/app/app.routes.ts` with `app.routes-updated.ts`

## Done! 

Now clicking any Alert ID will navigate to: `/alert/SAM-4832915`
