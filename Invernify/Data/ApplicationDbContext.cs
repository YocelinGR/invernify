using Microsoft.EntityFrameworkCore;

namespace Invernify.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<DeviceData> DeviceData { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<DeviceData>(entity =>
            {
                entity.HasKey(e => e.Uuid);

                entity.Property(e => e.Uuid)
                    .HasColumnName("uuid")
                    .HasDefaultValueSql("(newid())");

                entity.Property(e => e.Did)
                    .IsRequired()
                    .HasColumnName("did")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.H)
                    .IsRequired()
                    .HasColumnName("h")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Pid)
                    .HasColumnName("pid")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Sm)
                    .HasColumnName("sm")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Tt)
                    .HasColumnName("tt")
                    .HasColumnType("datetime");
            });
        }
    }
}